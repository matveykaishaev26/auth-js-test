import { BringToFront, Calendar1, CalendarArrowUp } from "lucide-react";
import React from "react";
import { LucideIcon } from "lucide-react";

export type NavMainTab = { label: string; href: string; icon: LucideIcon };

export default function NavMain() {
  const navMainTabs: NavMainTab[] = [
    {
      label: "Сегодня",
      href: "/",
      icon: Calendar1, // Передаем компонент без JSX
    },
    {
      label: "Следующие 7 дней",
      href: "/",
      icon: CalendarArrowUp,
    },
    {
      label: "Входящие",
      href: "/",
      icon: BringToFront,
    },
  ];

  return (
    <div className="w-full">
      {navMainTabs.map((item) => (
        <div key={item.label} className="w-full flex items-center gap-x-2 p-2 hover:bg-secondary/90 transition rounded-lg cursor-pointer text-muted-foreground">
          <item.icon size={16} /> {/* Рендерим компонент как JSX */}
          <span className="text-foreground text-[14px]">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
