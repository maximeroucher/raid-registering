"use client";

import { Button } from "@/src/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useCodeVerifierStore } from "@/src/stores/codeVerifier";
import { useEffect } from "react";

const Login = () => {
  const { token, isTokenExpired, login, isLoading, getTokenFromRequest } =
    useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { codeVerifier, isLoading: isLoggingLoading } = useCodeVerifierStore();

  useEffect(() => {
    if (
      code &&
      typeof window !== "undefined" &&
      !isLoading &&
      codeVerifier !== undefined
    ) {
      login(code, () => {
        router.replace("/");
      });
    }
  }, [code, isLoading, codeVerifier, login, router]);

  if (token !== null && !isTokenExpired()) {
    router.replace("/");
  }

  function connectMyECL(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    getTokenFromRequest();
  }

  console.log("isLoggingLoading", isLoggingLoading);

  return (
    <Button variant="outline" onClick={connectMyECL} disabled={isLoading}>
      {isLoading ? (
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        "MyECL"
      )}
    </Button>
  );
};

export default Login;
