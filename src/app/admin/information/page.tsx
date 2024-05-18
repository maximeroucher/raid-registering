"use client";

import { TopBar } from "@/src/components/admin/TopBar";
import { CardLayout } from "@/src/components/information/CardLayout";
import { ContactMail } from "@/src/components/information/ContactMail";
import { DriveFolder } from "@/src/components/information/DriveFolder";
import { InscriptionEnd } from "@/src/components/information/InscriptionEnd";
import { PaymentLink } from "@/src/components/information/PaymentLink";
import { RaidDate } from "@/src/components/information/RaidDate";
import { RaidPrice } from "@/src/components/information/RaidPrice";
import { TShirtPrice } from "@/src/components/information/TShirtPrice";
import { Button } from "@/src/components/ui/button";
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
            <div className="grid xl:grid-cols-3 gap-4 w-full grid-cols-1 max-md:p-8 max-md:gap-4">
              <InscriptionEnd />
              <RaidDate />
              <ContactMail />
              <PaymentLink />
              <DriveFolder />
              <CardLayout label="Capacité maximale">
                <>En développement</>
              </CardLayout>
              <RaidPrice />
              <TShirtPrice />
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default InformationPage;
