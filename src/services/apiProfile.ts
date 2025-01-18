import { supabase } from "@/lib/supabase";
import { IProfile } from "@/lib/types";

export async function getProfileById(id: string): Promise<IProfile> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error);
    }
    return data as IProfile;
  } catch (error) {
    console.error(error);
    return error;
  }
}
