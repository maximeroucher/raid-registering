"use client";

import { Button } from "@/src/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";

const Login = () => {
  const { getTokenFromRequest, token, isTokenQueried, isLoading } = useAuth();

  const router = useRouter();

  function connectMyECL(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    getTokenFromRequest(window);
  }

  if (isTokenQueried && token !== null) {
    router.replace("/");
  }

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
