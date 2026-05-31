import { signIn, signOut, auth } from "@/auth";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6">
      <Link href="/" className="text-xl font-bold">
        Tasks App
      </Link>
      <div>
        {session?.user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm">{session.user.name || session.user.email}</span>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md transition"
            >
              Sign in with GitHub
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}
