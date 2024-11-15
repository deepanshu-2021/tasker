import { NextFunction, Request, Response } from "express";
import { ApiError } from "./apiError";
export async function errorMiddleWare(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    res.status(error.statusCode).json({ message: error.message });
  }
  if (error.name === "ValidationError" || error.name==="CastError") {
    res.status(400).json({ message:"Wrong details"});
  }
  console.log(error.name);
  res.statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(res.statusCode).json({ message: error.message });
}
