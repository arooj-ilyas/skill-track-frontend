import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MOCK_PROGRAMS, MOCK_SUBMISSIONS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  PlayCircle,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Calendar,
  FileUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { calculateProgramProgress } from "@/lib/progress";

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const program = MOCK_PROGRAMS.find((p) => p.id === id);

  if (!program) {
    notFound();
  }

  // Use the shared utility for all math/stats
  const { modulePercent, totalPercent, isFullyComplete, stats } =
    calculateProgramProgress(id);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Breadcrumb */}
      <Button
        variant="ghost"
        asChild
        className="gap-2 -ml-2 text-zinc-500 hover:text-amber-600"
      >
        <Link href="/programs">
          <ChevronLeft className="h-4 w-4" />
          Back to Programs
        </Link>
      </Button>

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b pb-8 border-zinc-100">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Badge
              className={
                isFullyComplete
                  ? "bg-emerald-100 text-emerald-700 border-none"
                  : "bg-orange-100 text-amber-700 border-none"
              }
            >
              {isFullyComplete ? "Completed" : "In Progress"}
            </Badge>
            <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
              ID: {id}
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            {program.title}
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl italic">
            {program.description}
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-10">
          {/* 1. Modules Section (Learning) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-zinc-800">
              <FileText className="h-5 w-5 text-amber-700" />
              Curriculum Modules
            </h3>
            <div className="grid gap-3">
              {program.modules.map((module, index) => {
                const isCompleted = module.isCompleted;
                const isStarted = !isCompleted && module.isStarted;

                return (
                  <Card
                    key={module.id}
                    className={`group border-2 transition-all duration-200 shadow-sm ${
                      isCompleted
                        ? "border-transparent opacity-90"
                        : "border-transparent hover:border-amber-500 cursor-pointer"
                    }`}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                            isCompleted
                              ? "bg-emerald-100 text-emerald-700"
                              : isStarted
                                ? "bg-amber-100 text-amber-700"
                                : "bg-zinc-100 text-zinc-500"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div>
                          <h4
                            className={`font-medium transition-colors ${
                              isCompleted
                                ? "text-zinc-500"
                                : "text-zinc-900 group-hover:text-amber-700"
                            }`}
                          >
                            {module.title}
                          </h4>
                          <p className="text-xs text-zinc-400">
                            Learning Material • 15m
                          </p>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        variant={isCompleted ? "outline" : "default"}
                        className={
                          isCompleted
                            ? "border-emerald-300 text-emerald-700 hover:bg-emerald-200"
                            : isStarted
                              ? "bg-amber-600 hover:bg-amber-700"
                              : "bg-zinc-500 hover:bg-zinc-900"
                        }
                      >
                        {isCompleted
                          ? "Review"
                          : isStarted
                            ? "Continue"
                            : "Start"}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 2. Assignments Section (Deliverables) */}
          {stats.totalTasks > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 pt-4 border-t border-zinc-100">
                <ClipboardCheck className="h-5 w-5 text-amber-700" />
                Required Assignments
              </h3>
              <div className="grid gap-3">
                {program.tasks?.map((task) => {
                  const submission = MOCK_SUBMISSIONS.find(
                    (s) => s.taskId === task.id,
                  );
                  const isReviewed = submission?.status === "REVIEWED";
                  const isSubmitted = task.isSubmitted;

                  return (
                    <Card
                      key={task.id}
                      className={`border-2 transition-all duration-200 ${
                        isSubmitted
                          ? "bg-emerald-50/30 border-emerald-100 opacity-90"
                          : "bg-orange-50/30 border-orange-100 hover:border-amber-500 cursor-pointer"
                      }`}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              isSubmitted
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {isSubmitted ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : (
                              <FileUp className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <h4
                              className={`font-medium transition-colors ${
                                isSubmitted
                                  ? "text-zinc-500"
                                  : "text-zinc-900 group-hover:text-amber-700"
                              }`}
                            >
                              {task.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-zinc-500">
                              <Calendar className="h-3 w-3" /> Due: {task.dueAt}
                            </div>
                          </div>
                        </div>

                        {isReviewed ? (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="border-emerald-300 text-emerald-700 hover:bg-emerald-200 shadow-sm"
                          >
                            <Link href="/submissions">View Feedback</Link>
                          </Button>
                        ) : isSubmitted ? (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled
                            className="border-zinc-200 text-zinc-400 bg-zinc-50 opacity-100"
                          >
                            Pending Review
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            className="bg-amber-600 hover:bg-amber-700 text-white border-none shadow-sm"
                          >
                            Submit Task
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="bg-zinc-700 text-white border-none shadow-2xl sticky top-8">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-300">Overall Completion</span>
                  <span className="font-mono text-amber-400 font-bold">
                    {Math.round(totalPercent)}%
                  </span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-600 transition-all duration-1000 ease-out"
                    style={{ width: `${totalPercent}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-zinc-800 text-center">
                <div>
                  <p className="text-[10px] text-zinc-300 uppercase font-bold tracking-widest mb-1">
                    Modules
                  </p>
                  <p
                    className={`text-xl font-bold ${modulePercent === 100 ? "text-emerald-400" : "text-white"}`}
                  >
                    {stats.completedModules}/{stats.totalModules}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-300 uppercase font-bold tracking-widest mb-1">
                    Tasks
                  </p>
                  <p
                    className={`text-xl font-bold ${stats.completedTasks === stats.totalTasks ? "text-emerald-400" : "text-white"}`}
                  >
                    {stats.completedTasks}/{stats.totalTasks}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
