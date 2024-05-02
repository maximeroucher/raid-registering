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
  tShirtSizes,
  bikeSizes,
} from "@/src/infra/comboboxValues";
import { ConfirmationCheckbox } from "./ConfirmationCheckbox";
import PhoneInput from "react-phone-input-2";

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
  PHONE = "phone",
  TSHIRTSIZE = "tShirtSize",
  BIKESIZE = "bikeSize",
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
  participantId?: string;
}

export function EditParticipantCardItem<T extends ValueType>({
  label,
  id,
  placeholder,
  form,
  layer,
  type,
  needDialog,
  participantId,
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
      case ValueTypes.TSHIRTSIZE:
        return (
          <>
            <div className="col-span-2"></div>
            <div className="col-span-2">
              <FormMessage />
              <FormControl>
                <Combobox values={tShirtSizes} placeholder={placeholder} {...field} />
              </FormControl>
            </div>
          </>
        );
        
      case ValueTypes.BIKESIZE:
        return (
          <>
            <div className="col-span-2"></div>
            <div className="col-span-2">
              <FormMessage />
              <FormControl>
                <Combobox values={bikeSizes} placeholder={placeholder} {...field} />
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
                fileType={id}
                documentId={field.value?.id}
                participantId={participantId!}
              />
            </DialogContent>
          </Dialog>
        );
      case ValueTypes.SECURITYFILE:
        return (
          <Dialog open={open} onOpenChange={setIsOpen}>
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
                      {field.value?.id ? (
                        <span className="text-gray-500 overflow-hidden">
                          {"Fiche de sécurité"}
                        </span>
                      ) : (
                        <span className="font-semibold mr-6">
                          {"Remplir la fiche de sécurité"}
                        </span>
                      )}
                    </>
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
              <SecurityFileDialog
                setIsOpen={setIsOpen}
                form={form}
                setIsUploading={setIsUploading}
              />
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
      case ValueTypes.PHONE:
        return (
          <div className="col-span-4">
            <FormMessage />
            <FormControl>
              <PhoneInput
                country={"fr"}
                specialLabel=""
                placeholder="+33 6 06 06 06 06"
                inputClass="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                dropdownClass="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
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
