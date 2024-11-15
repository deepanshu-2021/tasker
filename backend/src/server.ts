import express, { Request, Response, Router } from "express";
import router from "./routes/router";
import connectDB from "./db/dbconfig";
import dotenv from "dotenv";
import { errorMiddleWare } from "./utils/errorMiddleware";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
connectDB();
app.use(express.json());
app.use("/api", router);
app.use(errorMiddleWare);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
