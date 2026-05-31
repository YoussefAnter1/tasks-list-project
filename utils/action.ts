"use server";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createTaskDto, updateTaskDto } from "./dtos";
// import { Status } from "@prisma/client";

// Server Action
export async function createTask({ title, description }: createTaskDto) {
  //   const title = formData.get("title")?.toString();
  //   const description = formData.get("description")?.toString();

  if (typeof title !== "string" || title.trim().length < 2) return;
  if (typeof description !== "string" || description.trim().length < 4) return;

  try {
    await prisma.task.create({
      data: {
        title,
        description,
        // status: "TODO",
      },
    });
  } catch {
    throw new Error("could not create the task, please try again");
  }

  // revalidatePath("/");
  redirect("/");
}

// Delete Task
export async function deleteTask(formData: FormData) {
  const id = formData.get("id")?.toString();
  if (!id) return;
  try {
    await prisma.task.delete({ where: { id: parseInt(id) } });
  } catch {
    throw new Error("could not delete the task, please try again");
  }
  // revalidatePath("/");
  redirect("/");
}

// Update Task
export async function updateTask(task: updateTaskDto) {

  // if (typeof task.title !== "string" || task.title.trim().length < 2) return;
  // if (typeof task.description !== "string" || task.description.trim().length < 4) return;
  // if (!task.status) return;
  // if (typeof task.id !== "string") return;

  try {
 
    await prisma.task.update({
      where: {
        id: task.id,
      },

      data: {
        title: task.title,
        description: task.description,
        status: task.status,
      },
    });
  } catch {
    throw new Error("could not update the task, please try again");
  }
  // revalidatePath("/");
  revalidatePath(`/task/${task.id}`);
  redirect("/");
}
