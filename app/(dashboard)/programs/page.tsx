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
import { Plus, Layers } from "lucide-react";
import { MOCK_USER, MOCK_PROGRAMS } from "@/lib/mockData";

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
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> Create Program
          </Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_PROGRAMS.map((program) => {
          // Calculate Progress
          const totalModules = program.modules.length;
          const completedCount = program.modules.filter(
            (m) => m.isCompleted,
          ).length;
          const progressPercent =
            totalModules > 0 ? (completedCount / totalModules) * 100 : 0;

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
                    className="w-fit mb-2 bg-blue-50 text-amber-600"
                  >
                    Active
                  </Badge>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                    <Layers className="h-4 w-4 text-amber-600" />
                    <span>{totalModules} Modules</span>
                  </div>

                  {/* Mini Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] uppercase tracking-wider font-bold text-zinc-400">
                      <span>Progress</span>
                      <span>{Math.round(progressPercent)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-600 transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
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
