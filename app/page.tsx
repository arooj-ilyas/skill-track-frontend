export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black gap-6">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        SkillTrack
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400">
        Internal training platform for modern teams
      </p>

      <a
        href="/login"
        className="rounded-md bg-black text-white px-6 py-3 hover:bg-zinc-800"
      >
        Login
      </a>
    </div>
  );
}
