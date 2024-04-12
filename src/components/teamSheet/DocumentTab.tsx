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
  const [selectedDocumentUser, setSelectedDocumentUser] = useState<string | null>(
    null,
  );

  function setDocument(document: Document, userId: string) {
    console.log("setDocument", document)
    setSelectedDocument(document);
    setSelectedDocumentUser(userId);
  }
  const key = selectedDocument?.type;
  return (
    <div className="grid xl:grid-cols-2 gap-4 w-full py-6 grid-cols-1 max-md:p-8 max-md:gap-4">
      <Card>
        <ParticipantDocumentCard
          participant={team.captain}
          setDocument={setDocument}
        />
        {team.second && (
          <ParticipantDocumentCard
            participant={team.second}
            setDocument={setDocument}
          />
        )}
      </Card>
      {selectedDocument && key && selectedDocumentUser && (
        <DocumentView
          userId={selectedDocumentUser}
          documentKey={key}
          id={selectedDocument.id}
          file={getDocument(selectedDocumentUser, key)}
        />
      )}
    </div>
  );
};
