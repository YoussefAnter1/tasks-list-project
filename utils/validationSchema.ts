import { z } from "zod";

// Create Task Schema
export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "title is required" })
    .min(2, { message: "title should be at least 2 characters long" })
    .max(200, { message: "title should be less than 200 characters" }),

  description: z
    .string()
    .min(1, { message: "description is required" })
    .min(10, {
      message: "description should be at least 10 characters long",
    })
    .max(1000, {
      message: "description should be less than 1000 characters",
    }),
});

// Edit Task Schema
export const editTaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "title is required" })
    .min(2, { message: "title should be at least 2 characters long" })
    .max(200, { message: "title should be less than 200 characters" }),

  description: z
    .string()
    .min(1, { message: "description is required" })
    .min(10, {
      message: "description should be at least 10 characters long",
    })
    .max(1000, {
      message: "description should be less than 1000 characters",
    }),

  status: z.enum(["TODO", "IN_PROGRESS", "COMPLETED"]),
});
