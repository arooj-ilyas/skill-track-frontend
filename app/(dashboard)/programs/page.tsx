import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { MOCK_USER, MOCK_PROGRAMS, MOCK_ENROLLMENTS } from "@/lib/mockData";
import { calculateProgramProgress } from "@/lib/progress";

export default function DashboardPage() {
  const now = new Date();

  // FILTER LOGIC: Only show programs where user has an enrollment record
  const enrolledProgramIds = MOCK_ENROLLMENTS.filter(
    (e) => e.employeeId === MOCK_USER.id,
  ).map((e) => e.programId);

  const myPrograms = MOCK_PROGRAMS.filter((p) =>
    enrolledProgramIds.includes(p.id),
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-zinc-900">My Learning</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {myPrograms.map((program) => {
          const { modulePercent, taskPercent, isFullyComplete, stats } =
            calculateProgramProgress(program.id);
          const hasTasks = program.tasks && program.tasks.length > 0;

          // Final Deadline Logic (Max date in array)
          let isOverdue = false;
          let formattedDueDate = "";
          if (hasTasks) {
            const finalDeadline = Math.max(
              ...program.tasks.map((t) => new Date(t.dueAt).getTime()),
            );
            isOverdue = now.getTime() > finalDeadline && !isFullyComplete;
            formattedDueDate = new Date(finalDeadline).toLocaleDateString(
              "en-US",
              { month: "short", day: "numeric" },
            );
          }

          return (
            <Link key={program.id} href={`/programs/${program.id}`}>
              <Card
                className={`h-full border-2 transition-all hover:border-amber-500 ${isOverdue ? "border-rose-100" : "border-transparent"}`}
              >
                <CardHeader>
                  <Badge
                    className={
                      isFullyComplete
                        ? "bg-emerald-100 text-emerald-700"
                        : isOverdue
                          ? "bg-rose-100 text-rose-700"
                          : "bg-orange-100 text-amber-700"
                    }
                  >
                    {isFullyComplete
                      ? "Completed"
                      : isOverdue
                        ? "Overdue"
                        : "Active"}
                  </Badge>
                  <CardTitle className="mt-2">{program.title}</CardTitle>
                  {hasTasks && (
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase mt-2 text-zinc-400">
                      <Calendar className="h-3 w-3" /> Due: {formattedDueDate}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Modules Progress */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold uppercase">
                      <span>Modules</span>
                      <span>
                        {stats.completedModules}/{stats.totalModules}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 rounded-full">
                      <div
                        className="h-full bg-emerald-500"
                        style={{ width: `${modulePercent}%` }}
                      />
                    </div>
                  </div>
                  {/* Tasks Progress */}
                  {hasTasks && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold uppercase">
                        <span>Tasks</span>
                        <span>
                          {stats.completedTasks}/{stats.totalTasks}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-full">
                        <div
                          className={`h-full ${isOverdue ? "bg-rose-500" : "bg-amber-600"}`}
                          style={{ width: `${taskPercent}%` }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
