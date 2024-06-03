"use client";

import { TopBar } from "@/src/components/admin/TopBar";
import { ContactMail } from "@/src/components/admin/information/ContactMail";
import { DriveFolder } from "@/src/components/admin/information/DriveFolder";
import { EmergencyPerson } from "@/src/components/admin/information/EmergencyPersons";
import { InscriptionEnd } from "@/src/components/admin/information/InscriptionEnd";
import { RaidDate } from "@/src/components/admin/information/RaidDate";
import { RaidInformation } from "@/src/components/admin/information/RaidInformation";
import { RaidPrice } from "@/src/components/admin/information/RaidPrice";
import { RaidRules } from "@/src/components/admin/information/RaidRules";
import { TShirtPrice } from "@/src/components/admin/information/TShirtPrice";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
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
        <Card>
          <CardHeader>
            <CardTitle>Informations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full grid-cols-1 max-md:p-8 max-md:gap-4">
              <InscriptionEnd />
              <RaidDate />
              <ContactMail />
              <DriveFolder />
              <RaidPrice />
              <TShirtPrice />
              <EmergencyPerson />
              <RaidRules />
              <RaidInformation />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default InformationPage;
