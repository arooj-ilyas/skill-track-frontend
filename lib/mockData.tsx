// lib/mockData.ts

export type Role = "ADMIN" | "EMPLOYEE";

export const MOCK_USER = {
  id: "u1",
  name: "Arooj Ilyas",
  email: "arooj@utoronto.ca",
  role: "ADMIN" as Role, // Change this to test different views
  orgId: "org1",
};

export const MOCK_PROGRAMS = [
  {
    id: "p1",
    title: "Onboarding 101",
    description: "Welcome to the company!",
    modules: [
      { id: "m1", title: "Company Culture", order: 1 },
      { id: "m2", title: "Security Protocols", order: 2 },
    ],
  },
];

export const MOCK_SUBMISSIONS = [
  {
    id: "s1",
    taskId: "t1",
    employeeName: "John Doe",
    status: "PENDING",
    submittedAt: "2026-03-09",
  },
];
