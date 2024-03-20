import { Card, CardContent } from "../ui/card";

import { HiPlus } from "react-icons/hi";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";

export const EmptyParticipantCard = () => {
  function showToast() {
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été mises à jour avec succès",
    });
  }
  return (
    <Card className="w-full" onClick={showToast}>
      <CardContent className="w-full h-full">
        <div className="flex m-auto h-full mt-3">
          <Button variant="outline" className="flex m-auto">
            <HiPlus className="inline mr-4" />
            <span>Inviter un participant</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
