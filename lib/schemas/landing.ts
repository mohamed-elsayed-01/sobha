import { z } from "zod"
import { isValidPhoneNumber } from "react-phone-number-input";


export const registerFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),

  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required." })
    .refine(isValidPhoneNumber, {
      message: "Please enter a valid phone number.",
    }),

  email: z.string().email({
    message: "Please enter a valid email address.",
  }),

  preferredUnit: z.string().min(1, {
    message: "Please select a preferred unit.",
  }),

  budget: z.string().optional(),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>
