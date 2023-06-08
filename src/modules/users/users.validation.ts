import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    role: z
      .string({
        required_error: 'Role is required',
      })
      .min(3)
      .max(255),
    password: z.string().optional(),
  }),
});

export const UsersValidation = {
  createUserZodSchema,
};
