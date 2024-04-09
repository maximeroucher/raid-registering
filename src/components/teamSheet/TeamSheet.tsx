import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/src/components/ui/sheet";
import { useAdminTeam } from "@/src/hooks/useAdminTeam";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { InformationTab } from "./InformationTab";
import { Skeleton } from "../ui/skeleton";

interface TeamSheetProps {
  isOpened: boolean;
  onClose: () => void;
  teamId: string;
}

export const TeamSheet = ({ isOpened, onClose, teamId }: TeamSheetProps) => {
  const { team } = useAdminTeam(teamId);
  const isLoading = team?.id !== teamId;
  return (
    <Sheet open={isOpened} onOpenChange={onClose}>
      <SheetContent side="team">
        <SheetHeader>
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-80" />
            </>
          ) : (
            <>
              <SheetTitle>{team?.name}</SheetTitle>
              <SheetDescription>
                Dossier équipe completé à {team?.validation_progress.toFixed(0)}{" "}
                %
              </SheetDescription>
            </>
          )}
        </SheetHeader>
        <div className="p-4"></div>
        <Tabs defaultValue="information" className="">
          <TabsList className="grid grid-cols-3 w-[500px]">
            <TabsTrigger value="information">Informations</TabsTrigger>
            <TabsTrigger value="document">Documents</TabsTrigger>
            <TabsTrigger value="payment">Paiement</TabsTrigger>
          </TabsList>
          {isLoading ? (
            <Skeleton className="h-96 w-192 mt-6" />
          ) : (
            <>
              <TabsContent value="information">
                {team && <InformationTab team={team} />}
              </TabsContent>
              <TabsContent value="document"></TabsContent>
              <TabsContent value="payment"></TabsContent>
            </>
          )}
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
