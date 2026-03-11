"use client";

import React from "react";
import { MOCK_PROGRAMS, MOCK_ENROLLMENTS, MOCK_ORG } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SimpleEnrollmentPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <div className="flex justify-between items-center border-b pb-6">
        <div>
          <h1 className="text-2xl font-bold">Program Overview</h1>
          <p className="text-sm text-zinc-500">
            Student enrollment and completion tracking.
          </p>
        </div>
        <Badge variant="secondary">Org: {MOCK_ORG.name}</Badge>
      </div>

      <div className="grid gap-3">
        {MOCK_PROGRAMS.map((program) => {
          // Calculate student counts
          const totalEnrolled = MOCK_ENROLLMENTS.filter(
            (e) => e.programId === program.id,
          ).length;

          const totalCompleted = MOCK_ENROLLMENTS.filter(
            (e) => e.programId === program.id && e.status === "COMPLETED",
          ).length;

          return (
            <Card
              key={program.id}
              className="hover:bg-zinc-50 transition-colors border-zinc-200"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  {/* Course Info */}
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

                  {/* Stats & Link */}
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="flex items-center gap-1.5 text-zinc-600 font-medium">
                        <Users size={14} />
                        <span>{totalEnrolled}</span>
                      </div>
                      <p className="text-[10px] uppercase text-zinc-400 font-bold">
                        Students
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                        <CheckCircle size={14} />
                        <span>{totalCompleted}</span>
                      </div>
                      <p className="text-[10px] uppercase text-zinc-400 font-bold">
                        Completed
                      </p>
                    </div>

                    <Link
                      href={`/admin/programs/${program.id}`}
                      className="text-zinc-300 hover:text-zinc-900 transition-colors"
                    >
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
