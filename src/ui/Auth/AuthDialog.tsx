"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useContext, useState } from "react";
import { z } from "zod";
import SignUpForm from "./SignupForm";
import LoginForm from "./LogInForm";
import { AuthContext } from "@/store/authStore";
import { BiLogInCircle } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";

export function AuthDialog() {
  const [isNewUser, setIsNewUser] = useState(false);
  const { isAuthModalOpen, setIsAuthModalOpen } = useContext(AuthContext);
  return (
    <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
      <DialogTrigger asChild>
        <span>
          <Button className="hidden sm:block">Login</Button>
          <CiLogin className="sm:hidden block fill-primary" />
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isNewUser ? `Register An Account` : `Log in to continue`}
          </DialogTitle>
          <DialogDescription className="text-sm">
            {isNewUser
              ? `Fill the form below to create an account for a seamless shopping
            experience`
              : `Enter your credentials to resume your stress-free shopping experience`}
          </DialogDescription>
        </DialogHeader>
        {isNewUser ? (
          <SignUpForm
            closeDialog={() => setIsAuthModalOpen(false)}
            setToSIgnin={() => setIsNewUser(false)}
          />
        ) : (
          <LoginForm
            closeDialog={() => setIsAuthModalOpen(false)}
            setToSIgnUp={() => setIsNewUser(true)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
