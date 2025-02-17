import RegisterForm from "@/shared/components/auth/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Зарегистрироваться',
}
export default function Register() {
  return <RegisterForm />;
}
