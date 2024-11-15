import Task from "../model/model";
import { Response, Request, NextFunction } from "express";
import { ApiResponse } from "../utils/apiResponce";
import { ApiError } from "../utils/apiError";
async function getTask(req: Request, res: Response, next: NextFunction) {
  try {
    const Data = await Task.find({});
    const apiresponse = new ApiResponse(Data, "tasks retrive successfully!");
    res.status(201).json(apiresponse);
  } catch (error) {
    next(error);
  }
}
async function getTaskById(req: Request, res: Response, next: NextFunction) {
  try {
    const TaskId = req.params.id;
    if (TaskId === undefined) {
      throw new ApiError("unable to find task id", 400);
    }
    const Data = await Task.findById(TaskId);
    const apiresponse = new ApiResponse(Data, "task retrive successfully!");
    if(Data===null){
        throw  new ApiError('not task found!',404);
    }
    res.status(201).json(apiresponse);
  } catch (error) {
    next(error);
  }
}
async function createTask(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body;
    console.log(data);
    const Data = await Task.create(data);
    const apiresponse = new ApiResponse(Data, "created task successfully");
    res.status(201).json(apiresponse);
  } catch (error) {
    next(error);
  }
}
async function updateTask(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const { timeout, title, description, status } = req.body;
    const task = await Task.findById(id);
    if (!task) {
      throw new ApiError("unable to find task id", 400);
    }
    task.timeout = timeout || task.timeout;
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    const updateTask = await task?.save();
    const apiresponse = new ApiResponse(
      updateTask,
      "task retrive successfully!"
    );
    res.status(200).json(apiresponse);
  } catch (error) {
    next(error);
  }
}
async function deleteTask(req: Request, res: Response, next: NextFunction) {
  try {
    const TaskId = req.params.id;
    console.log(TaskId);
    if (!TaskId) {
      throw new ApiError("unable to find task id", 400);
    }
    await Task.findByIdAndDelete(TaskId);
    const apiresponse = new ApiResponse("task deleted successfully!");
    res.status(200).json(apiresponse);
  } catch (error) {
    next(error);
  }
}
export { deleteTask, getTask, createTask, updateTask, getTaskById };
