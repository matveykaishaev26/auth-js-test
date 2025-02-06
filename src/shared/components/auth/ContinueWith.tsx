"use client";
import { Button } from "../ui/button";
import { FaYandex } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes";



export default function ContinueWith() {
  const onClick = (provider: "yandex" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  const buttons = [
    { icon: <FaYandex color='#ff0000'/>, label: "Яндекс", onClick: () => onClick("yandex") },
    { icon: <FaGithub />, label: "Github", onClick: () => onClick("github") },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {buttons.map((item, index) => (
          <Button onClick={item.onClick} variant={"outline"} key={index}>
            {item.icon}
            <span>{item.label}</span>
          </Button>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="h-[1px] bg-secondary w-full" />
        <span className="uppercase text-xs text-muted-foreground">или</span>
        <div className="h-[1px] bg-secondary w-full" />
      </div>
    </div>
  );
}
