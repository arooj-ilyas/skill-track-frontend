import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle className="text-center">Login to SkillTrack</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Email" type="email" />

          <Input placeholder="Password" type="password" />

          <a href="/dashboard">
            <Button className="w-full">Login</Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
