export default function ProgramsPage() {
  const programs = [
    { id: 1, title: "Employee Onboarding", modules: 5 },
    { id: 2, title: "Security Compliance", modules: 3 },
    { id: 3, title: "Workplace Safety", modules: 4 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Training Programs</h1>

      <div className="grid grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{program.title}</h2>

            <p className="text-zinc-500 mt-2">{program.modules} modules</p>

            <button className="mt-4 text-blue-600">View Program</button>
          </div>
        ))}
      </div>
    </div>
  );
}
