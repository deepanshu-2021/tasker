import mongoose, { Schema, Document } from 'mongoose';
import { ITask } from '../interface/taskInterface';

interface ITaskDocument extends ITask, Document {}

const TaskSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done", "Timeout"],
      default: "To Do",
      required: true,
    },
    timeout: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model<ITaskDocument>('Task', TaskSchema);

export default Task;
