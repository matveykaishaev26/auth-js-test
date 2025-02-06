import { Check } from "lucide-react";

type FormErrorProps = {
  message?: string;
};

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-successful-foreground gap-x-2 p-3 text-xs text-successful rounded-md flex items-center">
      <Check />
      <span>{message}</span>
    </div>
  );
};
