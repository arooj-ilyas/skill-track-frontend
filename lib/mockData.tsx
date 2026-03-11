// lib/mockData.ts

export type Role = "ADMIN" | "EMPLOYEE";

export const MOCK_USER = {
  id: "u1",
  name: "Arooj Ilyas",
  email: "arooj@utoronto.ca",
  role: "ADMIN" as Role,
  orgId: "org1",
};

export const MOCK_ORG = {
  id: "org1",
  name: "Acme Learning Corp",
};

export const MOCK_ORG_USERS = [
  {
    id: "u1",
    name: "Arooj Ilyas",
    email: "arooj@utoronto.ca",
    role: "ADMIN" as Role,
    orgId: "org1",
  },
  {
    id: "u2",
    name: "John Smith",
    email: "john.s@acme.com",
    role: "EMPLOYEE" as Role,
    orgId: "org1",
  },
  {
    id: "u3",
    name: "Sarah Chen",
    email: "s.chen@acme.com",
    role: "EMPLOYEE" as Role,
    orgId: "org1",
  },
  {
    id: "u4",
    name: "Mike Ross",
    email: "m.ross@acme.com",
    role: "EMPLOYEE" as Role,
    orgId: "org1",
  },
];

export const MOCK_PROGRAMS = [
  {
    id: "p1",
    orgId: "org1",
    title: "Onboarding 101",
    description: "Welcome to the company! Initial training for all new staff.",
    createdBy: "admin-1",
    modules: [
      {
        id: "p1m1",
        title: "Culture",
        order: 1,
        isCompleted: true,
        isStarted: true,
      },
      {
        id: "p1m2",
        title: "Security",
        order: 2,
        isCompleted: true,
        isStarted: true,
      },
      {
        id: "p1m3",
        title: "Safety",
        order: 3,
        isCompleted: false,
        isStarted: false,
      },
    ],
    tasks: [
      {
        id: "p1t1", // Unique ID
        moduleId: "p1m3",
        title: "Safety Protocol Quiz",
        dueAt: "2026-04-05",
        isSubmitted: true,
      },
      {
        id: "p1t2", // Unique ID
        moduleId: "p1m1",
        title: "Signed Conduct Agreement",
        dueAt: "2026-04-05",
        isSubmitted: true,
      },
    ],
  },
  {
    id: "p2",
    orgId: "org1",
    title: "Advanced React Concepts",
    description:
      "A deep dive into hooks, patterns, and performance optimization.",
    createdBy: "admin-1",
    modules: [
      {
        id: "p2m1",
        title: "Understanding Reconciliation",
        order: 1,
        isCompleted: false,
        isStarted: true,
      },
      {
        id: "p2m2",
        title: "Custom Hook Patterns",
        order: 2,
        isCompleted: false,
        isStarted: false,
      },
      {
        id: "p2m3",
        title: "Server Components 101",
        order: 3,
        isCompleted: false,
        isStarted: false,
      },
    ],
    tasks: [
      {
        id: "p2t1", // Unique ID - previously was colliding as 't1'
        moduleId: "p2m1",
        title: "Intro Quiz",
        dueAt: "2026-08-05",
        isSubmitted: false,
      },
    ],
  },
  {
    id: "p3",
    orgId: "org1",
    title: "Hooks & States",
    description:
      "Learn all about hooks & states, what they are and how to implement them",
    createdBy: "admin-1",
    modules: [
      {
        id: "p3m1",
        title: "Understanding Hooks",
        order: 1,
        isCompleted: false,
        isStarted: false,
      },
      {
        id: "p3m2",
        title: "What is a State?",
        order: 2,
        isCompleted: false,
        isStarted: false,
      },
      {
        id: "p3m3",
        title: "useState & useEffect",
        order: 3,
        isCompleted: false,
        isStarted: false,
      },
    ],
    tasks: [
      {
        id: "p3t1",
        moduleId: "p3m1",
        title: "State vs Hook",
        dueAt: "2026-05-08",
        isSubmitted: false,
      },
      {
        id: "p3t2",
        moduleId: "p3m3",
        title: "useEffect vs useState",
        dueAt: "2026-07-09",
        isSubmitted: false,
      },
    ],
  },
];

export const MOCK_SUBMISSIONS = [
  {
    id: "sub-1",
    taskId: "p1t1", // Corrected to unique ID
    employeeId: "u1",
    storageKey: "safety_quiz_results.pdf",
    status: "REVIEWED",
    reviewedBy: "Sarah Trainer",
    feedback:
      "Excellent understanding of safety protocols. Make sure to review the fire exit section one more time.",
    score: 95,
    submittedAt: "2026-03-08",
  },
  {
    id: "sub-2",
    taskId: "p1t2", // Corrected to unique ID
    employeeId: "u1",
    storageKey: "culture_reflection.docx",
    status: "PENDING",
    submittedAt: "2026-03-10",
  },
];

export const MOCK_ENROLLMENTS = [
  { employeeId: "u1", programId: "p1", status: "ACTIVE" },
  { employeeId: "u1", programId: "p2", status: "ACTIVE" },
];

export const MOCK_PROGRESS = [
  {
    employeeId: "u1",
    programId: "p1",
    completionPct: 33,
    lastUpdated: "2026-03-10",
  },
  {
    employeeId: "u1",
    programId: "p2",
    completionPct: 10,
    lastUpdated: "2026-03-10",
  },
];
