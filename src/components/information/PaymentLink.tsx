import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { CardLayout } from "./CardLayout";

export const PaymentLink = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [link, setLink] = useState<string | undefined>(undefined);

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <CardLayout label="Lien de paiement">
      {isEdit ? (
        <>
          <Input value={link} onChange={(e) => setLink(e.target.value)} />
          <Button className="mt-2 w-[120px]" onClick={toggleEdit}>
            Valider
          </Button>
        </>
      ) : (
        <>
          <div className="text-2xl font-bold">
            {link ? link : <span>Lien non précisé</span>}
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
