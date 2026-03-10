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
        {MOCK_PROGRAMS.map((program) => (
          <Link
            key={program.id}
            href={`/programs/${program.id}`}
            className="block h-full"
          >
            <Card className="h-full border-2 border-transparent hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-pointer bg-white">
              <CardHeader>
                <Badge
                  variant="secondary"
                  className="w-fit mb-2 bg-blue-50 text-blue-700 hover:bg-blue-50"
                >
                  Active
                </Badge>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
                  <Layers className="h-4 w-4 text-blue-500" />
                  <span>{program.modules.length} Modules</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
