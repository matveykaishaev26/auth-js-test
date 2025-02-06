"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";
import { useSearchParams } from "next/navigation";
import {
  Form,
  FormMessage,
  FormField,
  FormControl,
  FormItem,
} from "../ui/form";
import * as z from "zod";
import { Input } from "../ui/input";
import { FormSuccess } from "./FormSuccess";
import { Button } from "../ui/button";
import newPassword from "../../../../actions/new-password";
import { useState, useTransition } from "react";
import AuthWrapper from "./AuthWrapper";
import { NewPasswordSchema } from "../../../../schemas";
export default function NewPasswordForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [isPending, startTransistion] = useTransition();

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");
    if (!token) return;
    console.log(values);
    startTransistion(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };
  return (
    <AuthWrapper heading="Новый пароль">
      <Form {...form}>
        <form className={"space-y-4"} onSubmit={form.handleSubmit(onSubmit)}>
          <div className={""}>
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Новый пароль"
                      type="newPassword"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Подтвердите новый пароль"
                      type="confirmPassword"
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
            Отправить ссылку на почту
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
}
