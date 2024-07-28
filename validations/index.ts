import * as z from "zod";

export const validateContactForm = z.object({
  name: z
    .string()
    .min(5, { message: "name is too short 5 characters at least" }),
  email: z.string().email({ message: "Please provide a valide email!" }),
  message: z
    .string()
    .min(10, { message: "Message too short" })
    .max(2000, { message: "Message too long" }),
});

export type contactForm = z.infer<typeof validateContactForm>;
