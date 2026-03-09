import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 gap-6">
      <h1 className="text-4xl font-bold">SkillTrack</h1>

      <p className="text-zinc-600">
        Internal training platform for modern teams
      </p>

      <a href="/login">
        <Button size="lg">Login</Button>
      </a>
    </div>
  );
}
