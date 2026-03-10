import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, ClipboardCheck, CheckCircle2, PlusCircle } from "lucide-react";
import { MOCK_PROGRAMS, MOCK_USER, MOCK_ENROLLMENTS } from "@/lib/mockData";

export default function CataloguePage() {
  const availablePrograms = MOCK_PROGRAMS;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          Course Catalogue
        </h1>
        <p className="text-zinc-500 max-w-2xl">
          Explore available training programs. Courses you are already taking
          will be marked as enrolled.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {availablePrograms.map((program) => {
          // Check if user is already enrolled
          const isEnrolled = MOCK_ENROLLMENTS.some(
            (e) => e.employeeId === MOCK_USER.id && e.programId === program.id,
          );

          const moduleCount = program.modules?.length || 0;
          const taskCount = program.tasks?.length || 0;

          return (
            <Card
              key={program.id}
              className={`flex flex-col border-2 transition-all duration-300 group ${
                isEnrolled
                  ? "bg-zinc-50/50 border-zinc-200 opacity-80"
                  : "bg-white border-zinc-100 hover:border-amber-500 shadow-sm"
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant="outline"
                    className="text-[10px] uppercase tracking-widest text-zinc-400 border-zinc-200"
                  >
                    {program.id}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`text-[10px] uppercase tracking-widest border-none ${
                      isEnrolled
                        ? "bg-amber-100 text-amber-700"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {isEnrolled ? "Required" : "Optional"}
                  </Badge>
                </div>
                <CardTitle
                  className={`text-xl transition-colors ${
                    isEnrolled
                      ? "text-zinc-500"
                      : "text-zinc-900 group-hover:text-amber-700"
                  }`}
                >
                  {program.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 pt-1">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase text-zinc-400 tracking-tighter flex items-center gap-1">
                      <Layers className="h-3 w-3" /> Modules
                    </span>
                    <span
                      className={`text-lg font-bold ${isEnrolled ? "text-zinc-400" : "text-zinc-700"}`}
                    >
                      {moduleCount}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase text-zinc-400 tracking-tighter flex items-center gap-1">
                      <ClipboardCheck className="h-3 w-3" /> Assignments
                    </span>
                    <span
                      className={`text-lg font-bold ${isEnrolled ? "text-zinc-400" : "text-zinc-700"}`}
                    >
                      {taskCount}
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-zinc-100">
                {isEnrolled ? (
                  <Button
                    disabled
                    className="w-full gap-2 bg-zinc-200 text-zinc-500 cursor-not-allowed"
                  >
                    Already Enrolled
                  </Button>
                ) : (
                  <Button className="w-full gap-2 bg-zinc-900 hover:bg-amber-600 text-white transition-colors">
                    Enroll in Program
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
