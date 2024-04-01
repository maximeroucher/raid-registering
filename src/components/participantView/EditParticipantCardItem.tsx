import {
  SecurityFile,
  Size,
  Document,
  Difficulty,
  MeetingPlace,
} from "@/src/api/hyperionSchemas";
import { Skeleton } from "../ui/skeleton";
import { Input } from "../ui/input";
import { Combobox } from "../ui/combobox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "../ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { DocumentDialog } from "./DocumentDialog";
import { SecurityFileDialog } from "./SecurityFileDialog";
import {
  difficulties,
  meetingPlaces,
  situations,
  sizes,
} from "@/src/infra/comboboxValues";
import { ConfirmationCheckbox } from "./ConfirmationCheckbox";

type ValueType =
  | string
  | Size
  | boolean
  | Document
  | SecurityFile
  | Situation
  | Difficulty
  | MeetingPlace;

export type Situation =
  | "centrale"
  | "otherschool"
  | "corporatepartner"
  | "other";

export enum ValueTypes {
  STRING = "string",
  SIZE = "size",
  BOOLEAN = "boolean",
  DOCUMENT = "document",
  SECURITYFILE = "securityFile",
  SITUATION = "situation",
  DIFFICULTY = "difficulty",
  MEETINGPLACE = "meetingPlace",
}

interface EditParticipantCardItemProps<T extends ValueType> {
  label: string;
  id: string;
  placeholder?: string;
  form: any;
  type: T;
  layer?: number;
  needDialog?: boolean;
}

export function EditParticipantCardItem<T extends ValueType>({
  label,
  id,
  placeholder,
  form,
  layer,
  type,
  needDialog,
}: EditParticipantCardItemProps<T>) {
  const [isUploading, setIsUploading] = useState(false);

  const valueComponent = (
    field: ControllerRenderProps<FieldValues, string>,
    open: boolean,
    setIsOpen: (value: boolean) => void,
  ) => {
    switch (type) {
      case ValueTypes.BOOLEAN:
        return (
          <ConfirmationCheckbox
            label={label}
            field={field}
            needDialog={needDialog ?? false}
          />
        );
      case ValueTypes.SIZE:
        return (
          <>
            <div className="col-span-3"></div>
            <div className="col-span-1">
              <FormMessage />
              <FormControl>
                <Combobox values={sizes} placeholder={placeholder} {...field} />
              </FormControl>
            </div>
          </>
        );
      case ValueTypes.DOCUMENT:
        return (
          <Dialog open={open} onOpenChange={setIsOpen}>
            <FormMessage />
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="col-span-4"
                disabled={isUploading}
              >
                <div className="flex flex-row items-start w-full">
                  {isUploading ? (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      {field.value?.name ? (
                        <span className="text-gray-500 overflow-hidden">
                          {field.value.name ?? "Aucun fichier séléctionné"}
                        </span>
                      ) : (
                        <span className="font-semibold  mr-6">
                          Choisir un fichier
                        </span>
                      )}
                    </>
                  )}
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-2xl top-1/2">
              <DialogHeader>
                <DialogTitle className="text-red sm:text-lg">
                  {label}
                </DialogTitle>
              </DialogHeader>
              <DocumentDialog
                setIsOpen={setIsOpen}
                setIsUploading={setIsUploading}
                field={field}
                id={id}
                documentId={field.value?.id}
              />
            </DialogContent>
          </Dialog>
        );
      case ValueTypes.SECURITYFILE:
        return (
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="col-span-4">
                <div className="flex flex-row items-start w-full">
                  {field.value?.id ? (
                    <span className="text-gray-500 overflow-hidden">
                      {"Fiche de sécurité"}
                    </span>
                  ) : (
                    <span className="font-semibold mr-6">
                      {"Remplir la fiche de sécurité"}
                    </span>
                  )}
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-3xl top-1/2">
              <DialogHeader>
                <DialogTitle className="text-red sm:text-lg">
                  {label}
                </DialogTitle>
              </DialogHeader>
              <SecurityFileDialog setIsOpen={setIsOpen} form={form} />
            </DialogContent>
          </Dialog>
        );
      case ValueTypes.STRING:
        return (
          <div className="col-span-4">
            <FormMessage />
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
          </div>
        );
      case ValueTypes.SITUATION:
        return (
          <div className="col-span-4">
            <FormMessage />
            <FormControl>
              <Combobox
                values={situations}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          </div>
        );

      case ValueTypes.DIFFICULTY:
        return (
          <div className="col-span-4">
            <FormMessage />
            <FormControl>
              <Combobox
                values={difficulties}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          </div>
        );
      case ValueTypes.MEETINGPLACE:
        return (
          <div className="col-span-4">
            <FormMessage />
            <FormControl>
              <Combobox
                values={meetingPlaces}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          </div>
        );

      default:
        return <Skeleton className="w-24 h-6" />;
    }
  };

  const [open, setIsOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field }) => (
        <FormItem>
          <div className={`grid p-2 grid-cols-6`}>
            <FormLabel
              className={`font-semibold text-left my-auto text-md col-span-2`}
            >
              {layer && <HiArrowNarrowRight className="inline mr-4" />}
              {label}
            </FormLabel>
            {valueComponent(field, open, setIsOpen)}
          </div>
        </FormItem>
      )}
    />
  );
}
