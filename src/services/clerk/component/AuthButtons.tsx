import { Button } from "@/components/ui/button";
import {
  SignUpButton as ClerkSignUpButton,
  SignInButton as ClerkSignInButton,
  SignOutButton as ClerkSignOutButton,
} from "@clerk/nextjs";
import { ComponentProps } from "react";
export function SignUpButton({
  children = <Button>Sign up </Button>,
  ...props
}: ComponentProps<typeof ClerkSignOutButton>) {
  return <ClerkSignUpButton {...props}>{children}</ClerkSignUpButton>;
}

export function SignInButton({
  children = <Button>Sign In </Button>,
  ...props
}: ComponentProps<typeof ClerkSignOutButton>) {
  return <ClerkSignUpButton {...props}>{children}</ClerkSignUpButton>;
}

export function SignOutButton({
  children = <Button>Sign Out </Button>,
  ...props
}: ComponentProps<typeof ClerkSignOutButton>) {
  return <ClerkSignOutButton {...props}>{children}</ClerkSignOutButton>;
}
