import { Request, Response } from "express";
import User, { IUser } from "../models/user.model";
import { userSchema } from "../schemas/user.schema";
import bcryptjs from "bcryptjs";
import { z } from "zod";

const signup = async (req: Request, res: Response) => {
  try {
    const validateUser = userSchema.parse(req.body);

    const { username, email, password } = validateUser;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "signup", data: newUser });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: error.errors });
    }
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

const login = (req: Request, res: Response) => {
  res.json({ message: "login", body: req.body });
};

export { signup, login };
