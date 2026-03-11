"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MOCK_PROGRAMS, MOCK_ENROLLMENTS } from "@/lib/mockData";
import { Plus, Pencil, Trash2, BookOpen, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ManageProgramsPage() {
  // 1. Setup states to hold our "DB" data
  const [programs, setPrograms] = useState<typeof MOCK_PROGRAMS>([]);
  const [enrollments, setEnrollments] = useState<typeof MOCK_ENROLLMENTS>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 2. Simulate an API fetch on mount
  useEffect(() => {
    const loadData = () => {
      // In the future, this would be: fetch('/api/admin/programs')
      setPrograms(MOCK_PROGRAMS);
      setEnrollments(MOCK_ENROLLMENTS);
      setIsLoading(false);
    };

    loadData();
  }, []);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to archive this program?")) {
      // Future: await fetch(`/api/programs/${id}`, { method: 'DELETE' })
      setPrograms((prev) => prev.filter((p) => p.id !== id));
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-300" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Manage Programs
          </h1>
          <p className="text-zinc-500">
            Monitor and update your organizations curriculum.
          </p>
        </div>
        <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
          <Plus className="h-4 w-4" /> Create Program
        </Button>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50">
            <TableRow>
              <TableHead className="w-[300px]">Program Title</TableHead>
              <TableHead>Structure</TableHead>
              <TableHead>Enrollments</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {programs.map((program) => {
              // 3. Derived Data: This logic remains the same even with a real DB
              const activeEnrollments = enrollments.filter(
                (e) => e.programId === program.id,
              ).length;

              return (
                <TableRow
                  key={program.id}
                  className="group hover:bg-zinc-50/50"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-50 rounded-lg">
                        <BookOpen className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-zinc-900">{program.title}</div>
                        <div className="text-[10px] text-zinc-400 font-mono uppercase tracking-tighter">
                          ID: {program.id}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="text-zinc-500 text-sm">
                    {program.modules.length} Modules •{" "}
                    {program.tasks?.length || 0} Tasks
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="outline"
                      className="font-semibold border-zinc-200 bg-zinc-50 text-zinc-700"
                    >
                      {activeEnrollments} Users
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-8 hover:text-amber-600"
                      >
                        <Link
                          href={`/admin/manage-programs/${program.id}/edit`}
                        >
                          <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-zinc-400 hover:text-rose-600"
                        onClick={() => handleDelete(program.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5 mr-1" /> Archive
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
