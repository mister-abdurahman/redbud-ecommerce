"use client";
import { createContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { AuthChangeEvent, Session, User } from "@supabase/supabase-js";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState<null | Session>(null);
  const [user, setUser] = useState<null | Session>(() => {
    if (typeof window !== "undefined") {
      const savedAuth = localStorage.getItem("user_session");
      return savedAuth ? JSON.parse(savedAuth) : null;
    }
    return null;
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // useEffect(() => {
  //   const { data: subscription } = supabase.auth.onAuthStateChange(
  //     (_event, session) => {
  //       setUser(session?.user || null);
  //       localStorage.setItem("user_session", JSON.stringify(user ?? null));
  //     }
  //   );
  //   return () => subscription.subscription.unsubscribe();
  // }, [user]);

  useEffect(() => {
    const fetchSession = async () => {
      localStorage.setItem("user_session", JSON.stringify(user));
    };

    fetchSession();
  }, [user]);
  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const { data, error } = await supabase.auth.getSession();
  //     if (error) {
  //       console.error("Error fetching session:", error.message);
  //     } else {
  //       setUser(data.session); // Save the session to state
  //       localStorage.setItem(
  //         "user_session",
  //         JSON.stringify(data.session ?? null)
  //       );
  //     }
  //   };

  //   fetchSession();
  // }, [user]);

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        // if (event === "SIGNED_OUT") {
        //   // Redirect to login when user logs out
        //   setIsAuthModalOpen(true)
        // }

        if (event === ("TOKEN_REFRESH_FAILED" as AuthChangeEvent)) {
          // Redirect to login if token refresh fails
          setUser(null);
          alert("Session expired. Please log in again.");
          setIsAuthModalOpen(true);
        }
      }
    );

    return () => {
      subscription?.subscription.unsubscribe();
    };
  }, [isAuthModalOpen]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthModalOpen, setIsAuthModalOpen }}
    >
      {children}
    </AuthContext.Provider>
  );
};
