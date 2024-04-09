import { Team } from "@/src/api/hyperionSchemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { ParticipantDocumentCard } from "./ParticipantDocumentCard";
import { DocumentView } from "../participantView/DocumentView";

interface InformationTabProps {
  team: Team;
}

export const DocumentTab = ({ team }: InformationTabProps) => {
  return (
    <div className="grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4">
      <Card>
        <ParticipantDocumentCard participant={team.captain} />
        {team.second && <ParticipantDocumentCard participant={team.second} />}
      </Card>

      {/* <DocumentView /> */}
    </div>
  );
};
