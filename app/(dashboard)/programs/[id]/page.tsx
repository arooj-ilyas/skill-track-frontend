import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MOCK_PROGRAMS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronLeft, PlayCircle, CheckCircle2, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const program = MOCK_PROGRAMS.find((p) => p.id === id);
  // If the ID doesn't exist in our mock data, show the 404 page
  if (!program) {
    notFound();
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Breadcrumb / Back Button */}
      <Button variant="ghost" asChild className="gap-2 -ml-2 text-zinc-500">
        <Link href="/programs">
          <ChevronLeft className="h-4 w-4" />
          Back to Programs
        </Link>
      </Button>

      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">
            In Progress
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            {program.title}
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl italic">
            {program.description}
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Modules List (Left Column) */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Curriculum Modules
          </h3>

          <div className="grid gap-3">
            {program.modules.map((module, index) => (
              <Card
                key={module.id}
                className="group hover:border-blue-200 transition-colors"
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center text-sm font-bold text-zinc-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium">{module.title}</h4>
                      <p className="text-xs text-zinc-400">Duration: 20 mins</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="gap-2">
                    <PlayCircle className="h-4 w-4" />
                    Start
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress Sidebar (Right Column) */}
        <div className="space-y-6">
          <Card className="bg-zinc-900 text-white border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg">Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Completion</span>
                  <span>0%</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-0" />
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Complete all modules and the final assessment to receive your
                certification for this program.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
