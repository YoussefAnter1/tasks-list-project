import { Status } from "@prisma/client";

export type createTaskDto = {
  title: string;
  description: string;
};
export type updateTaskDto = {
  id: number;
  title: string;
  description: string;
  status: Status;
};
