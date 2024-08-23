import { LogoutButton } from "@/components/custom/LogoutButton";

export default function SupportRoute() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1>Support</h1>
      <LogoutButton />
    </div>
  );
}