import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export const schemaSignIn = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(5, { message: "Password Should Have Min. 5 Character" }),
});

export const schemaCategory = z.object({
  name: z
    .string({ required_error: "Name is Required" })
    .min(4, { message: "Name Should Have Min. 4 Character" }),
});

export const schemaBrand = schemaCategory.extend({
  image: z
    .any()
    .refine((file: File) => ALLOW_MIME_TYPES.includes(file.type), {
      message: "File Is Not Valid",
    })
    .refine((file: File) => file?.name, { message: "Image Is Required" }),
});
