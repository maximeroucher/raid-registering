import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { Input } from "../../ui/input";
import { CardLayout } from "./CardLayout";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useInformation } from "@/src/hooks/useInformation";
import { LoadingButton } from "../../custom/LoadingButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { DocumentDialog } from "../../home/participantView/DocumentDialog";

export const RaidRules = () => {
  const { information, updateInformation } = useInformation();
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    raid_rules: z.string().email({
      message: "Veuillez renseigner une adresse email valide",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      raid_rules: information?.raid_rules_id ?? undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // setIsLoading(true);
    // updateInformation(
    //   {
    //     ...information,
    //     raid_rules: values.raid_rules,
    //   },
    //   () => {
    //     setIsLoading(false);
    //     setIsEdit(false);
    //     form.reset({ raid_rules: values.raid_rules });
    //   },
    // );
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  const [open, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardLayout label="Réglement du Raid">
          {isEdit ? (
            <>
              <FormField
                control={form.control}
                name="raid_rules"
                render={({ field }) => (
                  <FormItem>
                    <div className="items-center gap-4">
                      <FormControl>
                        <Dialog open={open} onOpenChange={setIsOpen}>
                          <FormMessage />
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="col-span-4 w-full"
                              disabled={isUploading}
                            >
                              <div className="flex flex-row items-start w-full">
                                <>
                                  {field.value ? (
                                    <span className="text-gray-500 overflow-hidden">
                                      {field.value ??
                                        "Aucun fichier séléctionné"}
                                    </span>
                                  ) : (
                                    <span className="font-semibold  mr-6">
                                      Choisir un fichier
                                    </span>
                                  )}
                                </>
                              </div>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="md:max-w-2xl top-1/2">
                            <DialogHeader>
                              <DialogTitle className="text-red sm:text-lg">
                                {"Règlement du raid"}
                              </DialogTitle>
                            </DialogHeader>
                            {/* <DocumentDialog
                              setIsOpen={setIsOpen}
                              setIsUploading={setIsUploading}
                              field={field}
                              fileType={id}
                              documentId={field.value?.id}
                              participantId={participantId!}
                            /> */}
                          </DialogContent>
                        </Dialog>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex flex-row">
                <Button
                  variant="outline"
                  className="mt-2 mr-2 w-[120px]"
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  Annuler
                </Button>
                <LoadingButton
                  className="mt-2 w-[120px]"
                  type="submit"
                  label="Valider"
                  isLoading={isLoading}
                />
              </div>
            </>
          ) : (
            <>
              <div className="text-2xl font-bold">
                <span>
                  {information?.raid_rules_id
                    ? "Réglement du Raid"
                    : "Aucun fichier"}
                </span>
              </div>
              <Button
                variant="outline"
                className="mt-4 w-[120px]"
                type="button"
                onClick={toggleEdit}
              >
                Modifier
              </Button>
            </>
          )}
        </CardLayout>
      </form>
    </Form>
  );
};
