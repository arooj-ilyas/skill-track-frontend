import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileCheck,
  Clock,
  AlertCircle,
  MessageSquare,
  Download,
  ExternalLink,
} from "lucide-react";
import { MOCK_SUBMISSIONS, MOCK_PROGRAMS } from "@/lib/mockData";

export default function SubmissionsPage() {
  const submissions = MOCK_SUBMISSIONS;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          My Submissions
        </h1>
        <p className="text-zinc-500 text-sm mt-1">
          Track the status of your assignments and view trainer feedback.
        </p>
      </div>

      <div className="grid gap-6">
        {submissions.map((sub) => {
          // 1. Find the parent program using the taskId
          const program = MOCK_PROGRAMS.find((p) =>
            p.tasks?.some((t) => t.id === sub.taskId),
          );

          // 2. Find the specific task to get its title
          const task = program?.tasks?.find((t) => t.id === sub.taskId);

          const isReviewed = sub.status === "REVIEWED";
          const isPending = sub.status === "PENDING";

          return (
            <Card
              key={sub.id}
              className={`border-2 transition-all duration-200 bg-white ${
                isReviewed
                  ? "hover:border-emerald-500 shadow-sm"
                  : "hover:border-amber-500 shadow-sm"
              }`}
            >
              <CardHeader className="pb-4 border-b border-zinc-50 bg-zinc-50/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        className={`border-none ${
                          isReviewed
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {isReviewed ? "Reviewed" : "Pending Review"}
                      </Badge>

                      {/* Displaying Program Name Badge */}
                      {program && (
                        <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-2 py-1 rounded border border-amber-100">
                          {program.title}
                        </span>
                      )}
                    </div>

                    <CardTitle className="text-xl text-zinc-900">
                      {task?.title || "Unknown Assignment"}
                    </CardTitle>
                    <p className="text-xs text-zinc-500">
                      Submitted on {sub.submittedAt}
                    </p>
                  </div>

                  {/* Score Display */}
                  {isReviewed && sub.score !== undefined && (
                    <div className="bg-white border-2 border-emerald-500 rounded-lg px-4 py-2 text-center shadow-sm">
                      <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none mb-1">
                        Score
                      </p>
                      <p className="text-2xl font-black text-emerald-600 leading-none">
                        {sub.score}
                        <span className="text-sm text-zinc-400">/100</span>
                      </p>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Submission Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-zinc-200 flex items-center justify-center">
                          <Download className="h-4 w-4 text-zinc-600" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-sm font-medium text-zinc-900 truncate max-w-[150px]">
                            {sub.storageKey}
                          </p>
                          <p className="text-[10px] text-zinc-400 uppercase font-bold">
                            Attached File
                          </p>
                        </div>
                      </div>
                      <button className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors">
                        View <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      {isPending ? (
                        <>
                          <Clock className="h-4 w-4 text-amber-500" />
                          <span>
                            Waiting for a trainer to review this content.
                          </span>
                        </>
                      ) : (
                        <>
                          <FileCheck className="h-4 w-4 text-emerald-500" />
                          <span>
                            Reviewed by{" "}
                            <span className="font-bold text-zinc-900">
                              {sub.reviewedBy}
                            </span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right: Feedback Section */}
                  <div
                    className={`p-4 rounded-xl border ${
                      isReviewed
                        ? "bg-emerald-50/30 border-emerald-100"
                        : "bg-zinc-50 border-zinc-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare
                        className={`h-4 w-4 ${isReviewed ? "text-emerald-600" : "text-zinc-400"}`}
                      />
                      <h4 className="text-sm font-bold text-zinc-900">
                        Trainer Feedback
                      </h4>
                    </div>
                    {sub.feedback ? (
                      <p className="text-sm text-zinc-600 leading-relaxed italic">
                        {sub.feedback}
                      </p>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-zinc-400 italic">
                        <AlertCircle className="h-4 w-4" />
                        <span>No feedback provided yet.</span>
                      </div>
                    )}
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
