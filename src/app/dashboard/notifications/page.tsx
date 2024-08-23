import { LogoutButton } from "@/components/custom/LogoutButton";

export default function NotificationsRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1>Class Notifications</h1>
      <LogoutButton />
    </div>
  );
}