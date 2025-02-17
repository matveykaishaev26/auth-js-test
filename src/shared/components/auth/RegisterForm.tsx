"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";
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
import { RegisterSchema } from "../../../../schemas";
import { FormSuccess } from "./FormSuccess";
import { Button } from "../ui/button";
import { register } from "../../../../actions/register";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const defaultEmail = searchParams.get("email");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: defaultEmail != undefined ? defaultEmail : "",
      password: "",
      name: "",
    },
  });

  const [isPending, startTransistion] = useTransition();
  const email = form.getValues("email");

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransistion(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  return (
    <AuthWrapper
      heading="Зарегистрироваться"
      description="Создайте свой аккаунт"
      isShowSocial={true}
      backButtonLabel="Есть аккаунт? Войти"
      backButtonHref={`/auth/login${email !== "" ? `?email=${email}` : ""}`}
    >
      <Form {...form}>
        <form className={"space-y-4"} onSubmit={form.handleSubmit(onSubmit)}>
          <>
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
          </>
          <div className={""}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Пароль: 6-64 символов"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className={""}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Имя"
                      type="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button disabled={isPending} className="w-full">
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
}
