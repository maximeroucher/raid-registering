import { Card, CardContent } from "../ui/card";

import { HiPlus } from "react-icons/hi";
import { toast } from "../ui/use-toast";

export const EmptyParticipantCard = () => {
  function showToast() {
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été mises à jour avec succès",
    });
  }
  return (
    <Card className="flex w-full m-14" onClick={showToast}>
      <CardContent className="m-auto">
        <HiPlus size={70} className="text-zinc-400" />
      </CardContent>
    </Card>
  );
};
