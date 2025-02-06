"use client";
import AuthWrapper from "./AuthWrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { newVerification } from "../../../../actions/new-verification";
export default function NewVerificationForm() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing token!");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => setError("Что то пошло не так!"));
  }, [token, error, success]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <AuthWrapper heading="Аккаунт подтвержден!">
      <div className="flex flex-col justify-center">
        <div className="w-full flex justify-center">
          {!success && !error && <BeatLoader color="#36d7b7" size={15} />}
        </div>

        <Button variant={"link"}>
          <Link href="/auth/login">Назад к логину</Link>
        </Button>
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
        <FormError message={error} />
      </div>
    </AuthWrapper>
  );
}
