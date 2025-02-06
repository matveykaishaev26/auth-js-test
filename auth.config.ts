import GitHub from "next-auth/providers/github";
import Yandex from "next-auth/providers/yandex";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import { getUserByEmail } from "./data/user";

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Yandex({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        console.log(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const passwordMath = await bcrypt.compare(password, user.password);
          if (passwordMath) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
