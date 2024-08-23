
import Link from "next/link";

import { getUserMeLoader } from "@/data/services/get-user-me-loader";
import { Logo } from "@/components/custom/Logo";
import { Button } from '@/components/ui/button';
import { LogoutButton } from "@/components/custom/LogoutButton";
import { SummaryForm } from "@/components/forms/SummaryForm";

import HeaderNav from "@/components/header-nav";

interface AuthUserProps {
  username: string;
  email: string;
}

export function LoggedInUser({ userData }: { readonly userData: AuthUserProps }) {
  return (
    <div className="flex gap-2">
      <Link
        href="/dashboard/account"
        className="font-semibold hover:text-primary"
      >
        {userData.username}
      </Link>
      <LogoutButton />
    </div>
  );
}

interface HeaderProps {
  data: {
    logoText: {
      id: number;
      label: string;
      url: string;
    };
    ctaButton: {
      id: number;
      label: string;
      url: string;
    };
  };
}

export async function Header({ data }: Readonly<HeaderProps>) {
  const user = await getUserMeLoader();
  console.log(user);

  const { logoText, ctaButton } = data;

  return (
    <div className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-between">
      <Logo text={logoText.label} />
      {user.ok && <SummaryForm />}
      <HeaderNav
        url={ctaButton.url}
        label={ctaButton.label}
        userImage={user.ok ? ("/llama.png"):("")}
        ok={user.ok} />
    </div>
    
  );
}
