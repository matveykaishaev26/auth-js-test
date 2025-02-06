"use server";

import { NewPasswordSchema } from "../schemas";
import * as z from "zod";
import { getUserByEmail } from "../data/user";
import { getPasswordResetByToken } from "../data/password-reset-token";
import bcrypt from "bcrypt";
import prisma from "../lib/db";
export default async function newPassword(
  values: z.infer<typeof NewPasswordSchema>,
  token?: string
) {
  if (!token) return { error: "Missing token" };
  const validatedFields = NewPasswordSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields" };

  const { newPassword } = validatedFields.data;

  const existingToken = await getPasswordResetByToken(token);
  if (!existingToken) return { error: "Invalid token" };
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token has expired" };

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) return { error: "Пользователя нет!" };

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await prisma.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Пароль обновлен" };
}
