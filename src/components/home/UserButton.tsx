import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useAuth } from "@/src/hooks/useAuth";
import { HiLogout, HiPencil, HiCheck } from "react-icons/hi";
import { UserInfoView } from "./UserInfoView";
import { toast } from "../ui/use-toast";
import { useState } from "react";
import { useParticipant } from "@/src/hooks/useParticipant";
import { Skeleton } from "../ui/skeleton";
import { addYears, formatDate, toDate } from "date-fns";
import { fr } from "date-fns/locale";
import PhoneInput from "react-phone-input-2";
import { Label } from "../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, Form, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { DatePicker } from "../ui/datePicker";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { EditUserInfoField } from "./EditUserInfoField";

export const UserButton = () => {
  const { me } = useParticipant();
  const { logout } = useAuth();

  const [isOpened, setIsOpened] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function toggle() {
    if (isEdit) {
      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été mises à jour avec succès",
      });
    }
    setIsEdit(!isEdit);
    // setIsOpened(false);
  }

  const formSchema = z.object({
    firstname: z.string(),
    name: z.string(),
    email: z.string().email({
      message: "Veuillez renseigner une adresse email valide",
    }),
    phone: z
      .string({
        required_error: "Veuillez renseigner un numéro de téléphone",
        invalid_type_error: "Veuillez renseigner un numéro de téléphone",
      })
      .min(11, {
        message: "Veuillez renseigner un numéro de téléphone valide",
      })
      .max(14, {
        message: "Veuillez renseigner un numéro de téléphone valide",
      }),
    birthday: z.date({
      required_error: "Veuillez renseigner votre date de naissance",
      invalid_type_error: "Veuillez renseigner une date de naissance valide",
    }),
  });

  function getPhone(value?: string): string {
    if (!value) {
      return "";
    }
    if (value.startsWith("0")) {
      return `+33 ${value.slice(1)}`;
    }
    return value;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: me?.firstname,
      name: me?.name,
      email: me?.email,
      phone: getPhone(me?.phone ?? ""),
      birthday: me?.birthday ? toDate(me?.birthday) : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const dateString = values.birthday.toISOString().split("T")[0];
    // createParticipant(
    //   {
    //     ...values,
    //     birthday: dateString,
    //   },
    //   () => {
    //     createTeam({
    //       name: `Équipe de ${values.firstname} ${values.name}`,
    //     });
    //   }
    // );
  }

  return (
    <Sheet open={isOpened} onOpenChange={setIsOpened}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          {me?.firstname === undefined || me?.name === undefined ? (
            <Skeleton className="w-24 h-6" />
          ) : (
            <>{me.firstname + " " + me.name}</>
          )}
        </Button>
      </SheetTrigger>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SheetContent className="flex flex-col justify-between">
            <SheetHeader>
              <SheetTitle>Paramètres</SheetTitle>
              <SheetDescription>Information du compte</SheetDescription>
            </SheetHeader>
            <div className="grid w-full items-center gap-6">
              {isEdit ? (
                <>
                  <EditUserInfoField
                    form={form}
                    label="Prénom"
                    id="firstname"
                    placeholder="Prénom"
                  />
                  <EditUserInfoField
                    form={form}
                    label="Nom"
                    id="name"
                    placeholder="Nom"
                  />
                  <EditUserInfoField
                    form={form}
                    label="Email"
                    id="email"
                    placeholder="inscription@raid.fr"
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={() => (
                      <FormItem>
                        <div className="flex flex-col space-y-1.5">
                          <FormLabel className="text-left font-bold">
                            Téléphone
                          </FormLabel>
                          <div className="col-span-4">
                            <FormMessage />
                            <Controller
                              name="phone"
                              control={form.control}
                              render={({ field: { onChange, value } }) => (
                                <PhoneInput
                                  value={value}
                                  onChange={onChange}
                                  country={"fr"}
                                  specialLabel=""
                                  placeholder="+33 6 06 06 06 06"
                                  inputClass="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  dropdownClass="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                                />
                              )}
                            />
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birthday"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-col space-y-1.5">
                          <FormLabel className="text-left font-bold">
                            Date de naissance
                          </FormLabel>
                          <div className="col-span-4">
                            <FormMessage />
                            <Controller
                              name="birthday"
                              control={form.control}
                              render={({ field: { onChange, value } }) => (
                                <DatePicker
                                  date={value}
                                  setDate={onChange}
                                  defaultDate={
                                    value || addYears(new Date(), -21)
                                  }
                                  {...field}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </FormItem>
                    )}
                  />
                </>
              ) : (
                <>
                  <UserInfoView label="Prénom" value={me?.firstname} />
                  <UserInfoView label="Nom" value={me?.name} />
                  <UserInfoView label="Email" value={me?.email} />
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone" className="font-bold">
                      Téléphone :
                    </Label>
                    <PhoneInput
                      value={me?.phone}
                      country={"fr"}
                      specialLabel=""
                      disabled
                    />
                  </div>
                  <UserInfoView
                    label="Date de naissance"
                    value={
                      me?.birthday
                        ? formatDate(toDate(me!.birthday), "PPP", {
                            locale: fr,
                          })
                        : "Non renseigné"
                    }
                  />
                </>
              )}
            </div>
            <SheetFooter>
              <div className="flex flex-row justify-between items-center w-full gap-6">
                <Button
                  variant={isEdit ? "default" : "outline"}
                  onClick={toggle}
                  type="submit"
                  className="w-full"
                >
                  {isEdit ? (
                    <>
                      <HiCheck className="mr-2 h-4 w-4" />
                      Enregistrer
                    </>
                  ) : (
                    <>
                      <HiPencil className="mr-2 h-4 w-4" />
                      Éditer
                    </>
                  )}
                </Button>
                <SheetClose asChild>
                  <Button
                    variant="destructive"
                    onClick={logout}
                    className="w-full"
                  >
                    <HiLogout className="mr-2 h-4 w-4" />
                    Se déconnecter
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </form>
      </FormProvider>
    </Sheet>
  );
};
