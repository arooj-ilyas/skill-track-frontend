import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 gap-6">
      <h1 className="text-4xl font-bold">SkillTrack</h1>
      <p className="text-zinc-600 text-center max-w-md">
        Standardizing corporate training and compliance for modern teams.
      </p>
      <Link href="/login">
        <Button size="lg">Go to Login</Button>
      </Link>
    </div>
  );
}
