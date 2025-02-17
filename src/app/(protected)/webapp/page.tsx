"use client";

import { useSidebar } from "@/app/SidebarProviders";
import { PanelRight } from "lucide-react";
export default function WebappPage() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="">
      <div
        className="p-2 w-fit hover:bg-secondary/90 rounded-lg text-muted-foreground"
        onClick={toggleSidebar}
      >
        <PanelRight size={20} />
      </div>
      <div className="w-full bg-red-500 h-[100px]"></div>
    </div>
  );
}
