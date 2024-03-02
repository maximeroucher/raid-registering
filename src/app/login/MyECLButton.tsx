"use client";

import * as React from "react";

import { Button } from "@/src/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons"
import { useAuth } from "../hooks/useAuth";

const Login = () => {

    const { getTokenFromRequest, isLoading } = useAuth();

  function connectMyECL(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    getTokenFromRequest(window);
  }

  return (
    <Button variant="outline" onClick={connectMyECL}>
        {isLoading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : "MyECL"}
    </Button>
  );
};

export default Login;
