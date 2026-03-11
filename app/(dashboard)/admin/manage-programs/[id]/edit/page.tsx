"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MOCK_PROGRAMS } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ArrowLeft,
  Save,
  Loader2,
  Trash2,
  Plus,
  FileText,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

// Simple interface for our files
interface ResourceFile {
  id: string;
  fileName: string;
  storageKey: string; // The path to the file in your future cloud storage
}

export default function SimpleEditPage() {
  const params = useParams();
  const router = useRouter();

  // 1. Fetch existing data (Simulated)
  const [programTitle, setProgramTitle] = useState(() => {
    const found = MOCK_PROGRAMS.find((p) => p.id === params.id);
    return found ? found.title : "";
  });

  // 2. Fetch existing files (Simulated)
  // In reality: useEffect() fetches from ResourceFile table where programId = params.id
  const [files, setFiles] = useState<ResourceFile[]>([
    { id: "1", fileName: "Syllabus.pdf", storageKey: "v1/syllabus.pdf" },
    {
      id: "2",
      fileName: "Safety_Guidelines.docx",
      storageKey: "v1/safety.docx",
    },
  ]);

  const [isSaving, setIsSaving] = useState(false);

  // 3. Simple Add File Logic
  const handleUploadClick = () => {
    const newFile = {
      id: Math.random().toString(), // Placeholder ID
      fileName: "New_Upload.pdf",
      storageKey: `uploads/${Date.now()}.pdf`,
    };
    setFiles([...files, newFile]);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Future: fetch('/api/programs', { method: 'PATCH', body: { programTitle, files } })
    await new Promise((resolve) => setTimeout(resolve, 600));
    router.push("/admin/manage-programs");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 py-8">
      <Link
        href="/admin/manage-programs"
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Programs
      </Link>

      <h1 className="text-2xl font-bold">Edit Program Details</h1>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Program Name */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="title">Program Title</Label>
              <Input
                id="title"
                value={programTitle}
                onChange={(e) => setProgramTitle(e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* File Manager */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between border-b bg-zinc-50/50 py-4">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Uploaded Resources
            </CardTitle>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-8 gap-2"
              onClick={handleUploadClick}
            >
              <Plus size={14} /> Upload File
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-zinc-100">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 hover:bg-zinc-50/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-100 rounded">
                      <FileText size={18} className="text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{file.fileName}</p>
                      <p className="text-[10px] text-zinc-400 font-mono">
                        {file.storageKey}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-300 hover:text-zinc-600"
                    >
                      <ExternalLink size={14} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-zinc-300 hover:text-rose-600"
                      onClick={() =>
                        setFiles(files.filter((f) => f.id !== file.id))
                      }
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 min-w-[100px]"
            disabled={isSaving}
          >
            {isSaving ? (
              <Loader2 className="animate-spin" size={16} />
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
