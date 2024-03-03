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
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { PasswordInput } from "@/src/components/ui/passwordInput";
import { TextSeparator } from "@/src/components/ui/textSeparator";
import MyECLButton from "../../components/login/MyECLButton";

const Login = () => {
  function connectOther(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <div className="flex [&>div]:w-full h-screen">
      <Card className="rounded-xl border bg-card text-card-foreground shadow max-w-[700px] m-auto text-zinc-700">
        <CardHeader>
          <CardTitle>Se connecter</CardTitle>
          <CardDescription>
            Connectez-vous avec MyECL ou par mail
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <MyECLButton />
              <TextSeparator text="Ou continuez par email" />
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input placeholder="raid@exemple.com" id="email"></Input>
                <div className="h-2"></div>
                <Label htmlFor="password">Mot de passe</Label>
                <PasswordInput type="password" hidden></PasswordInput>
              </div>
              <div/>
              <Button className="w-full" onClick={connectOther}>
                Se connecter
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <Button variant="link">Créer un compte</Button>
          <Button variant="link">Mot de passe oublié ?</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
