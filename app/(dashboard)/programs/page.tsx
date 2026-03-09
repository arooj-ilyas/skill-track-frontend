import React from "react";
// Note: If you haven't set up your UI components yet,
// you can use standard HTML tags for now to clear the error.

export default function ProgramsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Programs</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Create Program
        </button>
      </div>

      {/* This grid will later pull from your PostgreSQL TrainingProgram table */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h2 className="text-xl font-semibold">Onboarding 101</h2>
          <p className="text-gray-500 text-sm mt-2">
            Initial training for all new ECE department staff.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              Active
            </span>
            <span className="text-xs text-gray-400">3 Modules</span>
          </div>
        </div>

        <div className="p-6 border rounded-xl bg-white shadow-sm">
          <h2 className="text-xl font-semibold">Advanced React Safety</h2>
          <p className="text-gray-500 text-sm mt-2">
            Compliance training for senior developers.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
              Draft
            </span>
            <span className="text-xs text-gray-400">0 Modules</span>
          </div>
        </div>
      </div>
    </div>
  );
}
