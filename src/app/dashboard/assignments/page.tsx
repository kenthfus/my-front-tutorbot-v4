import { LogoutButton } from "@/components/custom/LogoutButton";

export default function AssignmentsRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1>Class Assignments</h1>
      <LogoutButton />
    </div>
  );
}