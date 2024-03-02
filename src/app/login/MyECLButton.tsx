"use client";

import { Button } from "@/src/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "../hooks/useUser";

const Login = () => {
  const { getTokenFromRequest, token, isLoading } = useAuth();

  const { me } = useUser(token);

  function connectMyECL(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    getTokenFromRequest(window);
  }

  return (
    <>
      {me && me != undefined ? (
        <div>
          <div>{me?.firstname}</div>
        </div>
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
