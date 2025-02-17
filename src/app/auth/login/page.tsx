import LoginForm from "@/shared/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Вход',
}

export default function Login() {
  return <LoginForm />;
}
