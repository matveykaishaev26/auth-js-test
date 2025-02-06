"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";
import { useSearchParams } from "next/navigation";
import AuthWrapper from "./AuthWrapper";
import {
  Form,
  FormMessage,
  FormField,
  FormControl,
  FormItem,
} from "../ui/form";
import * as z from "zod";
import { Input } from "../ui/input";
import { LoginSchema } from "../../../../schemas";
import { FormSuccess } from "./FormSuccess";
import { Button } from "../ui/button";
import { login } from "../../../../actions/login";
import { useState, useTransition } from "react";
import Link from "next/link";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "QAuthAccountNotLinked"
      ? "Email already id used with different provider"
      : "";
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch((err) => {
          console.error("Error during login:", err);
          setError("Что-то пошло не так!");
        });
    });
  };

  return (
    <AuthWrapper
      heading="Вход"
      description="Войдите в свой аккаунт с помощью почты и пароля"
      isShowSocial={true}
      backButtonLabel="Нет аккаунта? Зарегистрироваться"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {showTwoFactor && (
            <>
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="2FA Код"
                        type="text" // Исправлено на "text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {!showTwoFactor && (
            <>
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="Почта"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Пароль"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Link
                  className="text-muted-foreground text-[14px] hover:underline"
                  href="/auth/reset"
                >
                  Забыли пароль?
                </Link>
              </div>
            </>
          )}
          <FormSuccess message={success} />
          <FormError message={error || urlError} />
          <Button variant={"default"} disabled={isPending} className="w-full">
            {showTwoFactor ? "Подтвердить" : "Войти"}
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
}
