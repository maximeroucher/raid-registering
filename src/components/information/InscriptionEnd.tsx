import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { addYears, toDate } from "date-fns";
import { DatePicker } from "../ui/datePicker";
import { CardLayout } from "./CardLayout";
import { useInformation } from "@/src/hooks/useInformation";
import { LoadingButton } from "../ui/loadingButton";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { formatDate } from "@/src/utils/dateFormat";

export const InscriptionEnd = () => {
  const { information, updateInformation } = useInformation();
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    raid_registering_end_date: z.date({
      required_error: "Veuillez renseigner une date",
      invalid_type_error: "Veuillez renseigner une date valide",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      raid_registering_end_date: information?.raid_registering_end_date
        ? toDate(information.raid_registering_end_date)
        : undefined,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    updateInformation(
      {
        ...information,
        raid_registering_end_date: data.raid_registering_end_date
          ?.toISOString()
          .split("T")[0],
      },
      () => {
        setIsLoading(false);
        setIsEdit(false);
      },
    );
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <CardLayout label="Date de la clôture des inscriptions">
      {isEdit ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="raid_registering_end_date"
              render={({ field }) => (
                <FormItem>
                  <div className="items-center gap-4">
                    <FormMessage />
                    <Controller
                      name="raid_registering_end_date"
                      control={form.control}
                      render={({ field: { onChange, value } }) => (
                        <DatePicker
                          date={value}
                          setDate={onChange}
                          fromDate={new Date()}
                          toDate={addYears(new Date(), 1)}
                          {...field}
                        />
                      )}
                    />
                  </div>
                </FormItem>
              )}
            />
            <LoadingButton
              className="mt-2 w-[120px]"
              isLoading={isLoading}
              label="Valider"
              type="submit"
            />
          </form>
        </Form>
      ) : (
        <>
          <div className="text-2xl font-bold">
            {information?.raid_registering_end_date ? (
              formatDate(information.raid_registering_end_date)
            ) : (
              <span>Date non définie</span>
            )}
          </div>
          <Button
            variant="outline"
            className="mt-4 w-[120px]"
            onClick={toggleEdit}
            type="button"
          >
            Modifier
          </Button>
        </>
      )}
    </CardLayout>
  );
};
