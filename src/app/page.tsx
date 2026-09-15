"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/register")}
          className="rounded-md bg-neutral-900 px-6 py-2 font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Register
        </button>
        <button
          onClick={() => router.push("/login")}
          className="rounded-md border border-neutral-900 px-6 py-2 font-medium text-neutral-900 hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="rounded-md border border-neutral-900 px-6 py-2 font-medium text-neutral-900 hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          Dashboard
        </button>
      </div>
    </main>
  );
}