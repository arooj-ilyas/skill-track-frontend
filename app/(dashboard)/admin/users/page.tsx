"use client";

import React from "react";
import {
  MOCK_PROGRAMS,
  MOCK_ENROLLMENTS,
  MOCK_ORG,
  MOCK_ORG_USERS,
} from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  CheckCircle,
  ChevronRight,
  User as UserIcon,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminDirectoryPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <div className="flex justify-between items-center border-b pb-6">
        <div>
          <h1 className="text-2xl font-bold">Organization Directory</h1>
          <p className="text-sm text-zinc-500">
            Manage programs and track employee completion.
          </p>
        </div>
        <Badge variant="secondary">Org: {MOCK_ORG.name}</Badge>
      </div>

      <Tabs defaultValue="programs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="grid gap-3">
          {MOCK_PROGRAMS.map((program) => {
            // 1. Get all enrollments for this program
            const enrollments = MOCK_ENROLLMENTS.filter(
              (e) => e.programId === program.id,
            );

            // 2. Dynamic Completion Check
            // In a real app, you'd check this per-user.
            // Here, we check the global program data state you provided.
            const allModulesDone = program.modules.every((m) => m.isCompleted);
            const allTasksDone = program.tasks.every((t) => t.isSubmitted);

            // If all fields are true, the count for "Completed" is the number of enrollments
            const completedCount =
              allModulesDone && allTasksDone ? enrollments.length : 0;

            return (
              <Card
                key={program.id}
                className="hover:bg-zinc-50 transition-colors border-zinc-200"
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-100 p-2 rounded text-amber-700">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900">
                        {program.title}
                      </h3>
                      <p className="text-xs text-zinc-400">ID: {program.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="flex items-center gap-1.5 text-zinc-600 font-medium">
                        <Users size={14} /> <span>{enrollments.length}</span>
                      </div>
                      <p className="text-[10px] uppercase text-zinc-400 font-bold">
                        Students
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                        <CheckCircle size={14} /> <span>{completedCount}</span>
                      </div>
                      <p className="text-[10px] uppercase text-zinc-400 font-bold">
                        Completed
                      </p>
                    </div>

                    <Link
                      href={`/admin/programs/${program.id}`}
                      className="text-zinc-300 hover:text-zinc-900"
                    >
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="people">
          {/* ... existing People Tab logic ... */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
