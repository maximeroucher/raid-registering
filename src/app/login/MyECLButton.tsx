"use client";

import { Button } from "@/src/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { getTokenFromRequest, isLoading, token } =
    useAuth();

  function connectMyECL(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    getTokenFromRequest(window);
  }


  return (
    <>
      {token && token != undefined ? (
        <div>Logged in</div>
      ) : (
        <Button variant="outline" onClick={connectMyECL} disabled={isLoading}>
          {isLoading ? (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "MyECL"
          )}
        </Button>
      )}
    </>
  );
};

export default Login;
