import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface DocumentInfo {
  id?: string;
  file?: File;
}

interface DocumentsStore {
  documents: Record<string, DocumentInfo>;
  setDocument: (key: string, id: string, file: File) => void;
  setId: (key: string, id: string) => void;
}

export const useDocumentsStore = create<DocumentsStore>()(
  devtools(
    persist(
      (set) => ({
        documents: [
          "idCard",
          "medicalCertificate",
          "raidRules",
          "studentCard",
        ].reduce(
          (acc, key) => {
            acc[key] = {
              id: undefined,
              file: undefined,
            };
            return acc;
          },
          {} as Record<string, DocumentInfo>,
        ),
        setDocument: (key: string, id: string, file: File) => {
          set((state) => ({
            documents: {
              ...state.documents,
              [key]: {
                id: id,
                file: file,
              },
            },
          }));
        },
        setId: (key: string, id: string) => {
          set((state) => ({
            documents: {
              ...state.documents,
              [key]: {
                ...state.documents[key],
                id: id,
              },
            },
          }));
        },
      }),
      {
        name: "raid-documents-storage",
      },
    ),
  ),
);
