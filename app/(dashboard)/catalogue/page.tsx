import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Catalogue() {
  // Mock data representing the "ProgressSnapshot" and "Enrollment" schema
  const myProgress = [
    {
      id: "p1",
      name: "Security Compliance",
      progress: 100,
      status: "Completed",
    },
    {
      id: "p2",
      name: "Next.js Advanced Patterns",
      progress: 45,
      status: "In Progress",
    },
    { id: "p3", name: "Workplace Ethics", progress: 0, status: "Not Started" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">My Training Progress</h2>
        <p className="text-zinc-500">
          Track your active courses and upcoming deadlines.
        </p>
      </div>

      <div className="grid gap-6">
        {myProgress.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col md:flex-row md:items-center justify-between p-2"
          >
            <CardHeader className="border-none">
              <CardTitle>{item.name}</CardTitle>
              <p className="text-xs text-zinc-400">{item.status}</p>
            </CardHeader>
            <CardContent className="flex items-center gap-6 pb-0 md:pb-4">
              <div className="w-48 h-2 bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <span className="text-sm font-medium w-10">{item.progress}%</span>
              <Button variant={item.progress === 100 ? "outline" : "default"}>
                {item.progress === 100 ? "Review" : "Continue"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
