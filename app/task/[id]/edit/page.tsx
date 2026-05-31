// import { updateTask } from "@/utils/action";
import { prisma } from "@/utils/db";
import Link from "next/link";
import { notFound } from "next/navigation";

import EditTaskForm from "@/components/EditTaskForm";
interface EditTaskPageProps {
  params: Promise<{
    id: string;
  }>;
}
const EditTaskPage = async ({ params }: EditTaskPageProps) => {
  const { id } = await params;
  const task = await prisma.task.findUnique({
    where: { id: parseInt(id) },
  });

  if (!task) notFound();

  return (
    <section>
      <Link className="underline block mb-6 md:mb-10" href={`/task/${task.id}`}>
        {"<< "} Back to task details
      </Link>
      <div className="w-full md:w-2/3 mx-auto rounded-md p-4 md:p-5 bg-slate-800 border-2 border-gray-300">
        <h1 className="mb-5 md:mb-7 font-bold text-2xl md:text-3xl">Edit Task</h1>
        <EditTaskForm task={task} />
      </div>
    </section>
  );
};

export default EditTaskPage;
