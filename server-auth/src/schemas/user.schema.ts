import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3, "username is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(4, "Password must be at least 4 chars long"),
}).strict();

export { userSchema };
