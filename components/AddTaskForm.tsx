"use client";

import { createTask } from "@/utils/action";
import { createTaskDto } from "@/utils/dtos";
import { createTaskSchema } from "@/utils/validationSchema";
import { toast } from "react-toastify";

const AddTaskForm = () => {
  const clientAction = async (formData: FormData) => {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();

    const validation = createTaskSchema.safeParse({ title, description });
    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      return;
    }
    await createTask({ title, description } as createTaskDto);
  };
  return (
    <form action={clientAction} className="flex flex-col gap-6">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        className="p-2 text-xl rounded-md text-gray-950 bg-white"
      />
      <textarea
        name="description"
        rows={5}
        placeholder="Task Description"
        className="p-2 text-xl rounded-md text-gray-950 resize-none bg-white"
      ></textarea>
      <button
        type="submit"
        className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transform-none"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
