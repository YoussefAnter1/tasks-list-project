"use client";
import { Status, Task } from "@prisma/client";
import { updateTask } from "@/utils/action";
import { toast } from "react-toastify";
import { editTaskSchema } from "@/utils/validationSchema";

interface EditTaskFormProps {
  task: Task;
}

const EditTaskForm = ({ task }: EditTaskFormProps) => {
  const clientAction = async (formData: FormData) => {
    
    const id = parseInt(formData.get("id")?.toString() || "0");
    const title = formData.get("title")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const status = formData.get("status") as Status;

    const validation = editTaskSchema.safeParse({ title, description, status });
    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      return;
    }
    await updateTask({ id, title, description, status });
  };

  return (
    <form action={clientAction} className="flex flex-col gap-6">
      <input type="hidden" value={task.id} name="id" />
      <input
        type="text"
        placeholder="Task Title"
        name="title"
        className="p-2 text-xl rounded-md text-gray-950 bg-white"
        defaultValue={task.title}
      />
      <select
        name="status"
        defaultValue={task.status}
        className="p-2 text-xl rounded-md text-gray-950 bg-white"
      >
        <option value="TODO">TODO</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
      <textarea
        name="description"
        rows={5}
        placeholder="Task Description"
        defaultValue={task.description}
        className="p-2 text-xl rounded-md text-gray-950 resize-none bg-white"
      ></textarea>
      <button
        type="submit"
        className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors"
      >
        Edit Task
      </button>
    </form>
  );
};

export default EditTaskForm;
