import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { AuthEmailService } from "../emails/services/AuthEmailService";

const adminUserIds = (process.env.BETTER_AUTH_ADMIN_USER_IDS ?? "")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean);

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    customSyntheticUser: ({ coreFields, additionalFields, id }) => ({
      ...coreFields,
      role: "user",
      banned: false,
      banReason: null,
      banExpires: null,
      ...additionalFields,
      id,
    }),
    sendResetPassword: async ({ user, url }) => {
      const { name, email } = user;
      await AuthEmailService.sendPasswordResetToken({
        email,
        name,
        url,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      const { name, email } = user;
      await AuthEmailService.sendVerificationEmail({ name, email, url });
    },
  },
  plugins: [
    admin({
      defaultRole: "user",
      adminUserIds,
    }),
    nextCookies(),
  ],
});
