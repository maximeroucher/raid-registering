"use client";

import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";

interface RegisterProps {
  onCodeReceived: () => void;
}

export const Register = ({ onCodeReceived }: RegisterProps) => {
  const formSchema = z.object({
    email: z
      .string({
        required_error: "Veuillez renseigner votre adresse email",
      })
      .email({
        message: "Veuillez renseigner une adresse email valide",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex [&>div]:w-full h-screen">
          <Card className="rounded-xl border bg-card text-card-foreground shadow max-w-[700px] m-auto text-zinc-700">
            <CardHeader>
              <CardTitle className="text-2xl">{"Créer un compte"}</CardTitle>
              <CardDescription>
                {"Vous n'avez besoin que de votre email pour commencer"}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid gap-2">
                      <FormLabel className="text-left">Email</FormLabel>
                      <div>
                        <FormControl>
                          <Input placeholder="inscription@raid.fr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <Button className="w-full mt-2">
                {"Commencer à créer le compte"}
              </Button>
              <div className="flex flex-row">
                <div className="w-full text-center text-sm">
                  Vous avez déjà un compte ?{" "}
                  <Button variant="link" className="pl-1" type="button">
                    <Link href="/login">
                      Connectez-vous
                    </Link>
                  </Button>
                </div>
                <div className="w-full text-center text-sm">
                  Vous avez reçu le code par mail ?{" "}
                  <Button
                    variant="link"
                    className="pl-1"
                    onClick={onCodeReceived}
                    type="button"
                  >
                    Continuer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </Form>
  );
};
