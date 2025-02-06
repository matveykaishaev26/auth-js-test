import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Пожалуйста, введите корректный email.") // Кастомное сообщение
    .nonempty("Поле email не должно быть пустым."),
  password: z.string().min(1, {
    message: "Пароль обязателен!",
  }),
  code: z.optional(z.string()),
});

export const ResetSchema = z.object({
  email: z
    .string()
    .email("Пожалуйста, введите корректный email.") // Кастомное сообщение
    .nonempty("Поле email не должно быть пустым."),
});
export const RegisterSchema = z.object({
  email: z
    .string()
    .email("Пожалуйста, введите корректный email.") // Кастомное сообщение
    .nonempty("Поле email не должно быть пустым."),
  password: z.string().min(6, {
    message: "Пароль должен содержать минимум 6 символов!",
  }),
  name: z.string().min(1, {
    message: "Имя обязательно!",
  }),
});

export const NewPasswordSchema = z
  .object({
    newPassword: z.string().min(6, {
      message: "Пароль должен содержать минимум 6 символов!",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Пароли не совпадают!",
    path: ["confirmPassword"],
  });
