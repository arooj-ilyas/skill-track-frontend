import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4">
      <Card className="w-full max-w-[400px] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold">
            SkillTrack Login
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input placeholder="name@company.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input placeholder="••••••••" type="password" />
          </div>
          <Link href="/dashboard" className="w-full">
            <Button className="w-full mt-2">Sign In</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
