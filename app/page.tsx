import StatusBadge from "@/components/StatusBadge";
import { prisma } from "@/utils/db";
import Link from "next/link";
export const dynamic = "force-dynamic";
const HomePage = async () => {
  const tasks = await prisma.task.findMany();
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-semibold">Tasks List App</h1>
      <div className="flex items-center justify-end mb-6 md:mb-20 mt-4">
        <Link
          href="/task/add"
          className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-2 px-4 text-base md:text-xl font-semibold rounded-md"
        >
          Add Task
        </Link>
      </div>

      {/* Desktop Table - hidden on mobile */}
      <table className="hidden md:table w-full text-left mt-5">
        <thead className="border-t-2 border-b-2 border-gray-300 text-xl">
          <tr>
            <th className="p-3">#</th>
            <th>Task Title</th>
            <th>Task Status</th>
            <th>Task Details</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id} className="border-b border-gray-500">
              <td className="p-3">{index + 1}</td>
              <td className="text-lg font-semibold">{task.title}</td>
              <td>
                <StatusBadge status={task.status} />
              </td>
              <td>
                <Link
                  href={`/task/${task.id}`}
                  className="bg-blue-600 hover:bg-blue-800 transition-colors text-white rounded-md p-2"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards - visible only on mobile */}
      <div className="flex flex-col gap-4 md:hidden mt-4">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="bg-slate-800 rounded-lg p-4 border border-gray-600"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">#{index + 1}</span>
              <StatusBadge status={task.status} />
            </div>
            <h3 className="text-lg font-semibold mb-3">{task.title}</h3>
            <Link
              href={`/task/${task.id}`}
              className="bg-blue-600 hover:bg-blue-800 transition-colors text-white rounded-md py-2 px-4 text-sm inline-block"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
