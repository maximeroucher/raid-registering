"use client";

import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import MyECLButton from "../../components/login/MyECLButton";
import Link from "next/link";
import { Issuer } from "openid-client";
import { generators } from "openid-client";
import { useRouter } from "next/navigation";
import { useCodeVerifierStore } from "@/src/stores/codeVerifier";
import { LoadingButton } from "@/src/components/custom/LoadingButton";

function Login() {
  const router = useRouter();
  const { setCodeVerifier } = useCodeVerifierStore();
  
  async function openSSO() {
    console.log("dscover", process.env.NEXT_PUBLIC_BACKEND_URL ?? "");
    const hyperionIssuer = await Issuer.discover(
        "https://hyperion-3.dev.eclair.ec-lyon.fr",
    );
    console.log('ezgrshgj')

    const client = new hyperionIssuer.Client({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID ?? "",
      redirect_uris: [process.env.NEXT_PUBLIC_FRONTEND_URL ?? ""],
      response_types: ["code"],
    });

    const codeVerifier = generators.codeVerifier();
    setCodeVerifier(codeVerifier);
    const codeChallenge = generators.codeChallenge(codeVerifier);

    const url = client.authorizationUrl({
      scope: "API",
      code_challenge: codeChallenge,
      code_challenge_method: "SHA256",
    });
    router.push(url);
  }
  return (
    <div className="flex [&>div]:w-full h-screen">
      <Card className="rounded-xl border bg-card text-card-foreground shadow max-w-[700px] m-auto text-zinc-700">
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
          <CardDescription>
            Si vous possédez déjà un compte MyECL, vous pouvez vous connecter
            avec.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <LoadingButton
                isLoading={false}
                onClick={openSSO}
                label="Se connecter"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <Button variant="link">
            <Link href="/register">Créer un compte</Link>
          </Button>
          <Button variant="link">
            <Link href="/recover">Mot de passe oublié ?</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
