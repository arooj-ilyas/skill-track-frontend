export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="w-96 bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login to SkillTrack
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
          />

          <a
            href="/dashboard"
            className="bg-black text-white text-center py-2 rounded hover:bg-zinc-800"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
