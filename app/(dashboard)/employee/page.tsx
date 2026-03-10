import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  User,
  Building2,
  Mail,
  ShieldCheck,
  Settings,
  LogOut,
  Briefcase,
} from "lucide-react";
import { MOCK_USER, MOCK_ORG } from "@/lib/mockData";

export default function ProfilePage() {
  const user = MOCK_USER;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="pt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">{user.name}</h1>
          <p className="text-zinc-500 flex items-center gap-1.5 mt-1">
            <Mail className="h-4 w-4" />
            {user.email}
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 border-zinc-200 hover:bg-zinc-50"
          >
            <Settings className="h-4 w-4" /> Edit Profile
          </Button>
          <Button
            variant="ghost"
            className="gap-2 text-rose-600 hover:text-rose-700 hover:bg-rose-50"
          >
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card className="md:col-span-2 border-2 border-zinc-100 shadow-sm">
          <CardHeader className="border-b border-zinc-100 bg-zinc-50/30">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-zinc-400">
              Account Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Identity Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 uppercase">
                  Full Name
                </label>
                <p className="text-sm font-medium text-zinc-900">{user.name}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 uppercase">
                  Email Address
                </label>
                <p className="text-sm font-medium text-zinc-900">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Organization Section */}
            <div className="pt-8 border-t border-zinc-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-lg shrink-0">
                  <Building2 className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <label className="text-xs font-bold text-zinc-400 uppercase">
                    Affiliated Organization
                  </label>
                  <h3 className="text-lg font-bold text-zinc-900">
                    {MOCK_ORG.name}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    ID: {user.orgId}
                  </p>
                </div>
              </div>
            </div>

            {/* Role & ID Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-100">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 uppercase">
                  Role
                </label>
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-100 text-emerald-700 border-none px-3 py-1">
                    <ShieldCheck className="h-3 w-3 mr-1" />
                    {user.role}
                  </Badge>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 uppercase">
                  User ID
                </label>
                <p className="text-sm font-mono text-zinc-600">{user.id}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
