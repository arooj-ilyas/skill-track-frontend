import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout";

export default function DashboardPage() {
  const stats = [
    { title: "Programs", value: 5 },
    { title: "Completed", value: 2 },
    { title: "Overdue Tasks", value: 1, isRed: true },
  ];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="shadow-md hover:shadow-lg transition"
          >
            <CardHeader>
              <CardTitle>{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-3xl ${stat.isRed ? "text-red-500" : ""}`}>
                {stat.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/programs">
          <Button>View Training Programs</Button>
        </Link>
      </div>
    </Layout>
  );
}
