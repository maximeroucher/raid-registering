"use client";

import { TopBar } from "@/src/components/admin/TopBar";
import { useUser } from "@/src/hooks/useUser";
import { useRouter } from "next/navigation";

const InformationPage = () => {
  const { isAdmin } = useUser();
  const router = useRouter();

  if (!isAdmin() && typeof window !== "undefined") {
    const redirectUrl = new URL(window.location.href);
    const path = redirectUrl.pathname + redirectUrl.search;
    router.replace(`/?redirect=${path}`);
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <TopBar />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mt-8">
      </main>
    </div>
  );
};

export default InformationPage;