import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MOCK_USER } from "@/lib/mockData";

export default function DashboardPage() {
  const isEmployee = MOCK_USER.role === "EMPLOYEE";

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">
        {isEmployee ? "My Learning" : "Organization Overview"}
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {isEmployee ? (
          // EMPLOYEE VIEW: Focused on individual progress
          <>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">5</div>
              </CardContent>
            </Card>
          </>
        ) : (
          // ADMIN/TRAINER VIEW: Focused on org-wide stats
          <>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Employees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">124</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-600">12</div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
