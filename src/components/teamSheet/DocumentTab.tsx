import { Team } from "@/src/api/hyperionSchemas";
import { Card } from "../ui/card";
import { ParticipantDocumentCard } from "./ParticipantDocumentCard";
import { DocumentView } from "../participantView/DocumentView";
import { useState } from "react";
import { useDocument } from "@/src/hooks/useDocument";
import { Document } from "@/src/api/hyperionSchemas";

interface InformationTabProps {
  team: Team;
}

export const DocumentTab = ({ team }: InformationTabProps) => {
  const { getDocument } = useDocument();
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null,
  );
  const key = selectedDocument?.type;
  console.log(selectedDocument);
  return (
    <div className="grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4">
      <Card>
        <ParticipantDocumentCard participant={team.captain} setDocument={setSelectedDocument}/>
        {team.second && <ParticipantDocumentCard participant={team.second} setDocument={setSelectedDocument}/>}
      </Card>
      {selectedDocument && key && (
        <DocumentView
          documentKey={key}
          id={selectedDocument.id}
          file={getDocument(key)}
        />
      )}
    </div>
  );
};
