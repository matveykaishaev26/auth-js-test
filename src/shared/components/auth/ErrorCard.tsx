import { Button } from "../ui/button";
import Link from "next/link";
import AuthWrapper from "./AuthWrapper";
export default function ErrorCard() {
  return (
    <AuthWrapper heading="Упс! Что то пошло не так...">
      <div className="flex justify-center">
        <Button variant={"link"}>
          <Link href="/auth/login">Вернуться к странице логина</Link>
        </Button>
      </div>
    </AuthWrapper>
  );
}
