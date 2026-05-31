import StatusBadge from "@/components/StatusBadge";
import { deleteTask } from "@/utils/action";
import { prisma } from "@/utils/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SinglePageProps {
  params: Promise<{
    id: string;
  }>;
}

const TaskDetailsPage = async ({ params }: SinglePageProps) => {
  const { id } = await params;
  const task = await prisma.task.findUnique({
    where: { id: parseInt(id) },
  });
  if (!task) notFound();
//   const deleteTaskHandler = deleteTask.bind(null, task.id);
  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={"/"} className="underline">
          {"<< "} Back to tasks table
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={`/task/${task.id}/edit`}
            className="bg-green-700 hover:bg-green-600 transition-colors rounded-lg py-2 px-3 text-base md:text-xl"
          >
            Edit
          </Link>
          <form action={deleteTask}>
            <input type="hidden" name="id" value={task.id} />
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 transition-colors rounded-lg py-2 px-3 text-base md:text-xl"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 md:mt-16 p-4 md:p-5 rounded-lg bg-gray-600">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-bold text-2xl md:text-3xl">{task.title}</h2>
          <StatusBadge status={task.status} />
        </div>
        <small className="text-yellow-400 block mt-2">
          {new Date(task.createdAt).toDateString()}
        </small>
        <p className="mt-4 md:mt-5 text-base md:text-xl">{task.description}</p>
      </div>
    </section>
  );
};

export default TaskDetailsPage;
