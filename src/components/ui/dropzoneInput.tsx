import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { id } from "date-fns/locale";
import { DialogHeader } from "./dialog";
import { FormField } from "./form";
import { Button } from "./button";
import Dropzone from "react-dropzone";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface DropzoneInputProps {
  form: any;
  onDropAccepted: (files: any[]) => void;
  multiple?: boolean;
  maxSize?: number;
}

export const DropzoneInput = ({
  form,
  onDropAccepted,
  multiple = false,
  maxSize = 10485760,
}: DropzoneInputProps) => {
  return (
    <Dropzone
      accept={{
        "image/*": [".jpg", ".jpeg", ".png"],
        "application/pdf": [".pdf"],
      }}
      onDropAccepted={onDropAccepted}
      multiple={multiple}
      maxSize={maxSize}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps({
            className: cn(
              "container flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer",
            ),
          })}
        >
          <div className="flex items-center gap-x-3 mt-2 mb-2">
            <label
              htmlFor="Products"
              className={`text-sm text-[7E8DA0] cursor-pointer focus:outline-none focus:underline ${
                form.formState.errors.products && "text-red-500"
              }`}
            >
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  Glissez et déposez votre fichier ici ou{" "}
                  <span className="text-blue-600 underline">
                    sélectionnez un fichier
                  </span>
                </span>
              </span>
              <input {...getInputProps()} />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};
