"use server";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

interface signUpFormDetails {
  firstName: string;
  lastName: string;
  country: string;
  streetAddress: string;
  city: string;
  state: string;
  phoneNumber: number;
  email: string;
  password: string;
}
interface profileFormDetails {
  id: string;
  first_name: string;
  last_name: string;
  country: string;
  street_address: string;
  city: string;
  state: string;
  phone_number: number;
  email: string;
}

export async function updateUserProfile(updateData: profileFormDetails) {
  try {
    if (!updateData.id) throw new Error("User needs to be logged in");

    const { data, error } = await supabase
      .from("user_profiles")
      .update(updateData)
      .eq("id", updateData.id);

    if (error) throw new Error(error.message);

    revalidatePath(`/profile/${updateData.id}`);

    return { success: true, message: "User details updated successfully!" };
  } catch (error) {
    console.error("Error updating user details", error.message);

    return { success: false, error: error.message };
  }
}

export async function signUp(formDetails: signUpFormDetails) {
  try {
    // 1. Sign up the user
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: formDetails.email,
      password: formDetails.password,
    });

    if (signUpError) throw signUpError;

    // 2. Insert additional details into the profiles table
    const { error: profileError } = await supabase
      .from("user_profiles")
      .insert([
        {
          id: data.user?.id, // Link with the auth user ID
          email: formDetails.email,
          state: formDetails.state,
          city: formDetails.city,
          country: formDetails.country,
          first_name: formDetails.firstName,
          last_name: formDetails.lastName,
          street_address: formDetails.streetAddress,
          phone_number: formDetails.phoneNumber,
        },
      ]);

    if (profileError) throw profileError;

    return { success: true, message: "User signed up successfully!" };
  } catch (error) {
    console.error("Error signing up user:", error.message);
    if (
      error.message ==
      'duplicate key value violates unique constraint "user_profiles_email_key"'
    ) {
      return { success: false, error: "Email already exists.!" };
    } else {
      return { success: false, error: error.message };
    }
  }
}

export async function logIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw { message: error.message, name: error.name };
    return data.session;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function signInWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// export async function isUserAuthenticated() {
//   const { data: session } = await supabase.auth.getSession();

//   if (!session.session) {
//     return false;
//   } else {
//     return session.session;
//   }
// }
