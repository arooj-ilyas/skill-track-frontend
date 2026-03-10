// lib/progress.ts
import { MOCK_PROGRAMS } from "./mockData";

export function calculateProgramProgress(programId: string) {
  const program = MOCK_PROGRAMS.find((p) => p.id === programId);

  if (!program) {
    return {
      modulePercent: 0,
      taskPercent: 0,
      totalPercent: 0,
      isFullyComplete: false,
      stats: {
        completedModules: 0,
        totalModules: 0,
        completedTasks: 0,
        totalTasks: 0,
      },
    };
  }

  const totalModules = program.modules.length;
  const completedModules = program.modules.filter((m) => m.isCompleted).length;
  const modulePercent =
    totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  const programTasks = program.tasks || [];
  const totalTasks = programTasks.length;
  const completedTasks = programTasks.filter((t) => t.isSubmitted).length;
  const taskPercent = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  // Weighted average or simple average? Let's go simple for now:
  const totalItems = totalModules + totalTasks;
  const totalCompleted = completedModules + completedTasks;
  const totalPercent = totalItems > 0 ? (totalCompleted / totalItems) * 100 : 0;

  return {
    modulePercent,
    taskPercent,
    totalPercent,
    isFullyComplete:
      modulePercent === 100 && (totalTasks === 0 || taskPercent === 100),
    stats: {
      completedModules,
      totalModules,
      completedTasks,
      totalTasks,
    },
  };
}
