"use client";
import { signOut } from "next-auth/react";
type Props = {
    children: React.ReactNode
}
export function SignOut({children}: Props) {
  return <div onClick={() => signOut()}>{children}</div>;
}
