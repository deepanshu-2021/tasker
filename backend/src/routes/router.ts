import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskById,
  updateTask,
} from "../controller/controller";
const router = Router();
router.route("/tasks").get(getTask).post(createTask);
router.route("/tasks/:id").get(getTaskById).put(updateTask).delete(deleteTask);
export default router;
