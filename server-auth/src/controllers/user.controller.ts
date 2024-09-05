import { Request, Response } from "express";

const test = (req: Request, res: Response) => {
  res.json({ message: "Hello world, good" });
};

export { test };
