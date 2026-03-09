import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout";

export default function ProgramsPage() {
  const programs = [
    { id: 1, title: "Employee Onboarding", modules: 5 },
    { id: 2, title: "Security Compliance", modules: 3 },
    { id: 3, title: "Workplace Safety", modules: 4 },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-zinc-50 p-10">
        <h1 className="text-3xl font-bold mb-8">Training Programs</h1>

        <div className="grid grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id}>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-zinc-500">{program.modules} modules</p>

                <Button className="mt-4">View Program</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
