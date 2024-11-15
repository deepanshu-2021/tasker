// backend/src/interfaces/Task.ts

export interface ITask {
    title: string;
    description: string;
    status: "To Do" | "In Progress" | "Done" | "Timeout";
    createdAt: Date;
    updatedAt: Date;
    timeout: Date;
  }
