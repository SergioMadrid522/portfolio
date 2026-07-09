import { contactFormSchema } from "@/schemas/contact.schema";

export async function validateContactForm(data: unknown) {
  const res = contactFormSchema.safeParse(data);

  if (!res.success) {
    return {
      success: false,
      error: res.error.flatten().fieldErrors,
    };
  }
  return {
    success: true,
    res,
  };
}
