import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { type PropsWithChildren } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
type AuthWrapperProps = {
  heading: string;
  description?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  isShowSocial?: boolean;

};
import ContinueWith from "./ContinueWith";

export default function AuthWrapper({
  heading,
  description,
  backButtonLabel,
  backButtonHref,
  children,
  isShowSocial = false,

}: PropsWithChildren<AuthWrapperProps>) {
  return (
    <Card className="w-[400px]">
      <CardHeader className="space-y-2">
        <CardTitle className="text-center ">{heading}</CardTitle>
        {description && (
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        {isShowSocial && <ContinueWith />}
        {children}

      </CardContent>
      <CardFooter className="flex">
        {backButtonHref && backButtonHref && (
          <Button variant={"link"} className="w-full">
            <Link href={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
