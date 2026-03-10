// lib/mockData.ts

export type Role = "ADMIN" | "EMPLOYEE";

export const MOCK_USER = {
  id: "u1",
  name: "Arooj Ilyas",
  email: "arooj@utoronto.ca",
  role: "EMPLOYEE" as Role, // Change this to test different views
  orgId: "org1",
};

export const MOCK_PROGRAMS = [
  {
    id: "p1",
    title: "Onboarding 101",
    description: "Welcome to the company! Initial training for all new staff.",
    modules: [
      { id: "m1", title: "Culture", order: 1, isCompleted: true }, // Review
      {
        id: "m2",
        title: "Security",
        order: 2,
        isCompleted: false,
        isStarted: true,
      }, // Continue
      { id: "m3", title: "Safety", order: 3, isCompleted: false }, // Start
    ],
    tasks: [
      {
        id: "t1",
        title: "Safety Protocol Quiz",
        dueAt: "2026-04-01",
        isSubmitted: true,
      },
      {
        id: "t2",
        title: "Signed Conduct Agreement",
        dueAt: "2026-04-05",
        isSubmitted: false,
      },
    ],
  },
  {
    id: "p2",
    title: "Advanced React Concepts",
    description:
      "A deep dive into hooks, patterns, and performance optimization.",
    modules: [
      {
        id: "m3",
        title: "Understanding Reconciliation",
        order: 1,
        isCompleted: false,
      },
      { id: "m4", title: "Custom Hook Patterns", order: 2, isCompleted: false },
      {
        id: "m5",
        title: "Server Components 101",
        order: 3,
        isCompleted: false,
      },
    ],
    tasks: [],
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
