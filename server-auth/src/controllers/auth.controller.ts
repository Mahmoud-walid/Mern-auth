import { NextFunction, Request, Response } from "express";
import User, { IUser } from "../models/user.model";
import { userSchema } from "../schemas/user.schema";
import bcryptjs from "bcryptjs";
import { z } from "zod";
// import customErrorHandler from "../utils/error-custom";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validateUser = userSchema.parse(req.body);

    const { username, email, password } = validateUser;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword }); // ⭐⭐
    await newUser.save();

    res.status(201).json({ message: "signup", data: newUser });
  } catch (error: any) {
    // next(customErrorHandler(300, "Something went wrong"))
    next(error);
  }
};

const login = (req: Request, res: Response) => {
  res.json({ message: "login", body: req.body });
};

export { signup, login };
