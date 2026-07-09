import { z } from "zod";

export const contactFormSchema = z
  .object({
    name: z.string({ message: "Write a valid name" }).trim().max(200),
    company: z.string().trim().max(500),
    email: z.string().trim().email({ message: "Write a valid email" }).max(320),
    message: z.string().trim().max(500),
  })
  .superRefine((data, ctx) => {
    const { name, company, email, message } = data;
    if (name.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Name cannot be empty",
        path: ["name"],
      });
    }

    if (company.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Company cannot be empty",
        path: ["company"],
      });
    }

    if (message.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Message cannot be empty",
        path: ["message"],
      });
    }
  });
