import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { addYears, format } from "date-fns";
import { fr } from "date-fns/locale";
import { DatePicker } from "../ui/datePicker";
import { CardLayout } from "./CardLayout";

export const InscriptionEnd = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [date, setDate] = useState<Date | undefined>(undefined);

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <CardLayout label="Date de la clôture des inscriptions">
      {isEdit ? (
        <>
          <DatePicker
            date={date}
            setDate={setDate}
            fromDate={new Date()}
            toDate={addYears(new Date(), 1)}
          />
          <Button className="mt-2 w-[120px]" onClick={toggleEdit}>
            Valider
          </Button>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold">
            {date ? (
              format(date, "PPP", { locale: fr })
            ) : (
              <span>Date non définie</span>
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
