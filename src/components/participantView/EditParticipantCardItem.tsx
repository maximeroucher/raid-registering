import { SecurityFile, Size, Document } from "@/src/api/hyperionSchemas";
import { Checkbox } from "../ui/checkbox";
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
import { DropzoneInput } from "../ui/dropzoneInput";
import { useState } from "react";

type ValueType = string | Size | boolean | Document | SecurityFile | Situation;

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
}

interface EditParticipantCardItemProps<T extends ValueType> {
  label: string;
  id: string;
  placeholder?: string;
  form: any;
  type: T;
  layer?: number;
}

export function EditParticipantCardItem<T extends ValueType>({
  label,
  id,
  placeholder,
  form,
  type,
  layer,
}: EditParticipantCardItemProps<T>) {
  const sizeArray: Size[] = ["XS", "S", "M", "L", "XL"];

  const valueComponent = (
    field: ControllerRenderProps<FieldValues, string>,
    open: boolean,
    setIsOpen: (value: boolean) => void,
  ) => {
    switch (type) {
      case ValueTypes.BOOLEAN:
        return (
          <div className="col-span-4 text-right">
            <FormMessage />
            <FormControl>
              <Checkbox {...field} />
            </FormControl>
          </div>
        );
      case ValueTypes.SIZE:
        return (
          <>
            <div className="col-span-3"></div>
            <div className="col-span-1">
              <FormMessage />
              <FormControl>
                <Combobox
                  values={sizeArray.map((size) => ({
                    value: size,
                    label: size,
                  }))}
                  placeholder="Taille"
                  {...field}
                />
              </FormControl>
            </div>
          </>
        );
      case ValueTypes.DOCUMENT:
        return (
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="col-span-4">
                <div className="flex flex-row items-start w-full">
                  <span className="font-semibold  mr-6">
                    Choisir un fichier
                  </span>
                  <span className="text-gray-500">
                    {field.value ?? "Aucun fichier séléctionné"}
                  </span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-2xl top-1/2">
              <DialogHeader>
                <DialogTitle className="text-red sm:text-lg">
                  {label}
                </DialogTitle>
              </DialogHeader>
              <DropzoneInput
                setIsOpen={setIsOpen}
                onDropAccepted={(files, _) => {
                  const file = files[0];
                  field.onChange(file.name);
                }}
              />
            </DialogContent>
          </Dialog>
        );
      case ValueTypes.SECURITYFILE:
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="col-span-4">
                <div className="flex flex-row items-start w-full">
                  <span className="font-semibold  mr-6">
                    {field.value ? "Modifier" : "Remplir"} la fiche de sécurité
                  </span>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <FormMessage />
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
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
                values={[
                  { value: "centrale", label: "Centrale" },
                  { value: "otherschool", label: "Autre école" },
                  { value: "corporatepartner", label: "Partenaire entreprise" },
                  { value: "other", label: "Autre" },
                ]}
                placeholder="Situation"
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
          <div className={`grid p-2 grid-cols-6 `}>
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
