import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Layers, ClipboardCheck } from "lucide-react";
import { MOCK_USER, MOCK_PROGRAMS } from "@/lib/mockData";
import { calculateProgramProgress } from "@/lib/progress";

export default function ProgramsPage() {
  const isAdmin = MOCK_USER.role === "ADMIN";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Programs
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            {isAdmin
              ? "Manage organization training."
              : "Your assigned modules."}
          </p>
        </div>

        {isAdmin && (
          <Button className="gap-2 bg-zinc-900 hover:bg-zinc-800">
            <Plus className="h-4 w-4" /> Create Program
          </Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_PROGRAMS.map((program) => {
          const { modulePercent, taskPercent, isFullyComplete, stats } =
            calculateProgramProgress(program.id);

          return (
            <Link
              key={program.id}
              href={`/programs/${program.id}`}
              className="block h-full"
            >
              <Card className="h-full border-2 border-transparent hover:border-amber-500 hover:shadow-lg transition-all duration-200 bg-white">
                <CardHeader className="pb-2">
                  <Badge
                    variant="secondary"
                    className={`w-fit mb-2 border-none ${
                      isFullyComplete
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-orange-100 text-amber-700"
                    }`}
                  >
                    {isFullyComplete ? "Completed" : "Active"}
                  </Badge>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Modules Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-zinc-400">
                        <Layers className="h-3 w-3" />
                        <span>
                          Modules ({stats.completedModules}/{stats.totalModules}
                          )
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700">
                        {Math.round(modulePercent)}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-600"
                        style={{ width: `${modulePercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Tasks Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-zinc-400">
                        <ClipboardCheck className="h-3 w-3" />
                        <span>
                          Tasks ({stats.completedTasks}/{stats.totalTasks})
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-amber-600">
                        {Math.round(taskPercent)}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-600"
                        style={{ width: `${taskPercent}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
