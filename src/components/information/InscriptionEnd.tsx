import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { addYears, format, toDate } from "date-fns";
import { DatePicker } from "../ui/datePicker";
import { CardLayout } from "./CardLayout";
import { useInformation } from "@/src/hooks/useInformation";
import { LoadingButton } from "../ui/loadingButton";
import { apiFormatDate, formatDate } from "@/src/utils/dateFormat";
import { fr } from "date-fns/locale";

export const InscriptionEnd = () => {
  const { information, updateInformation } = useInformation();
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    information?.raid_registering_end_date
      ? toDate(information.raid_registering_end_date)
      : undefined,
  );

  function toggleEdit() {
    if (isEdit) {
      setIsLoading(true);
      updateInformation(
        {
          ...information,
          raid_registering_end_date: apiFormatDate(date),
        },
        () => {
          setIsLoading(false);
          setIsEdit(false);
        },
      );
    } else {
      setIsEdit(!isEdit);
    }
  }

  return (
    <CardLayout label="Date de la clôture des inscriptions">
      {isEdit ? (
        <>
          <DatePicker
            date={date}
            setDate={setDate}
            fromDate={addYears(new Date(), -1)}
            toDate={addYears(new Date(), 1)}
          />
          <LoadingButton
            className="mt-2 w-[120px]"
            isLoading={isLoading}
            onClick={toggleEdit}
            label="Valider"
          />
        </>
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
