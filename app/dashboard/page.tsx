export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-50 p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Programs</h2>
          {/* hardcoded */}
          <p className="text-3xl mt-2">5</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Completed</h2>

          {/* hardcoded */}
          <p className="text-3xl mt-2">2</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Overdue Tasks</h2>
          {/* hardcoded */}
          <p className="text-3xl mt-2 text-red-500">1</p>
        </div>
      </div>

      <div className="mt-10">
        <a href="/programs" className="text-blue-600 underline">
          View Training Programs →
        </a>
      </div>
    </div>
  );
}
