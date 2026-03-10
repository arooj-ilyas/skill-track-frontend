import Link from "next/link";
import { MOCK_USER } from "@/lib/mockData";
import {
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  UserCircle,
  LogOut,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-zinc-50/50">
      {/* Sidebar - Remains visible for everyone but links change */}
      <aside className="hidden w-64 flex-col border-r bg-white md:flex">
        <div className="flex h-16 items-center px-6">
          <Link
            href="/dashboard"
            className="font-bold text-xl tracking-tight text-primary"
          >
            SkillTrack
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-3"
          >
            <Link href="/employee">
              <UserCircle size={18} /> Profile
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-3"
          >
            <Link href="/programs">
              <BookOpen size={18} /> My Programs
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-3"
          >
            <Link href="/catalogue">
              <LayoutDashboard size={18} /> Catalogue
            </Link>
          </Button>

          <>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start gap-3"
            >
              <Link href="/submissions">
                <CheckSquare size={18} /> Submissions
              </Link>
            </Button>
          </>
        </nav>

        <div className="p-4 border-t">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive"
          >
            <Link href="/login">
              <LogOut size={18} /> Logout
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* TOP NAVBAR - Always rendered */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-8">
          <h1 className="text-sm font-medium text-zinc-500">
            Welcome,{" "}
            <span className="text-zinc-950 font-bold">{MOCK_USER.name}</span>
          </h1>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-zinc-500">
              <Bell className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-semibold">{MOCK_USER.name}</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold">
                  {MOCK_USER.role}
                </p>
              </div>
              <Avatar className="h-8 w-8 border">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {MOCK_USER.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
}
