"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";
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
import { reset } from "../../../../actions/reset";
import { useState, useTransition } from "react";
import AuthWrapper from "./AuthWrapper";
import { ResetSchema } from "../../../../schemas";
export default function ResetForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof ResetSchema >>({
    resolver: zodResolver(ResetSchema ),
    defaultValues: {
      email: "",
    },
  });

  const [isPending, startTransistion] = useTransition();

  const onSubmit = (values: z.infer<typeof ResetSchema >) => {
    setError("");
      setSuccess("");
      
      console.log(values)
    startTransistion(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };
  return (
    <AuthWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Назад к логину"
      heading="Восстановление пароля"
    >
      <Form {...form}>
        <form className={"space-y-4"} onSubmit={form.handleSubmit(onSubmit)}>
          <div className={""}>
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
