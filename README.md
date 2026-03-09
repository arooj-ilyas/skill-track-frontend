# SkillTrack Frontend - Dashboard Architecture

This branch implements the core routing and UI shell for the SkillTrack application using **Next.js 16** and **shadcn/ui**.

### Key Implementation Details

- **Route Grouping**: Established a `(dashboard)` group to handle layout persistence across internal pages without affecting the URL structure.
- **Layout & Navigation**: Created a global dashboard layout featuring a sidebar and top navigation bar built with **shadcn/ui** components and **Lucide-React** icons.
- **Role-Based Access Control (RBAC)**: Integrated conditional rendering to hide management features (like "Submissions") and specific metrics from users with an `EMPLOYEE` role.
- **Modular Page Structure**: Scaffolding complete for `Overview`, `Programs`, `Employee Progress`, and `Submissions` views.
- **Mock Data Integration**: Set up a centralized `lib/mockData.ts` to manage user sessions and program data while backend authentication is in development.

---

### Testing & View Verification

To verify the different UI perspectives (Admin vs. Employee), you must manually toggle the user role in the mock data file:

1.  Open `lib/mockData.ts`.
2.  Locate the following line:
    ```typescript
    role: "ADMIN" as Role, // Change this to test different views
    ```
3.  Change the string to either `"ADMIN"` or `"EMPLOYEE"`.
4.  Save the file; the dashboard sidebar and overview metrics will update automatically to reflect the permissions of that role.
