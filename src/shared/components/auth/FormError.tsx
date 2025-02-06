import { CircleX } from "lucide-react";

type FormErrorProps = {
  message?: string;
};

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 gap-x-2 p-3 text-destructive text-xs rounded-md flex items-center">
      <CircleX/>
      <span>{message}</span>
    </div>
  );
};
