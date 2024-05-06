import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { RangeDatePicker } from "../ui/RangeDatePicker";
import { DateRange } from "react-day-picker";
import { apiFormatDate, formatDateRange } from "@/src/utils/dateFormat";
import { CardLayout } from "./CardLayout";
import { useInformation } from "@/src/hooks/useInformation";
import { LoadingButton } from "../ui/loadingButton";

export const RaidDate = () => {
  const { information, updateInformation } = useInformation();
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    information?.raid_start_date && information?.raid_end_date
      ? {
          from: new Date(information.raid_start_date),
          to: new Date(information.raid_end_date),
        }
      : undefined,
  );

  function toggleEdit() {
    if (isEdit) {
      setIsLoading(true);
      updateInformation(
        {
          ...information,
          raid_start_date: apiFormatDate(dateRange?.from),
          raid_end_date: apiFormatDate(dateRange?.to),
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
    <CardLayout label="Date du raid">
      {isEdit ? (
        <>
          <RangeDatePicker dateRange={dateRange} setDateRange={setDateRange} />

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
              onClick={toggleEdit}
              isLoading={isLoading}
              label="Valider"
            />
          </div>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold">
            {dateRange && dateRange.from && dateRange.to ? (
              formatDateRange(
                dateRange.from.toString(),
                dateRange.to.toString(),
              )
            ) : (
              <span>Période non définie</span>
            )}
          </div>
          <Button
            variant="outline"
            className="mt-4 w-[120px]"
            onClick={toggleEdit}
          >
            Modifier
          </Button>
        </>
      )}
    </CardLayout>
  );
};
