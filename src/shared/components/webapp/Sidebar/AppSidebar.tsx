"use client";
import { UserProfile } from "./UserProfile/UserProfile";
import NavMain from "./NavMain";
import { useSidebar } from "@/app/SidebarProviders";
import TaskListTab from "./TaskList/TaskListTab";
// import { Search } from "lucide-react";
// import { Button } from "../../ui/button";
// import { RefreshCcw } from "lucide-react";
export default function AppSidebar() {
  const { isSidebarOpen } = useSidebar();
  return (
    <>
      {isSidebarOpen && (
        <div className="w-[300px] select-none bg-sidebar p-4 min-h-screen border-r">
          <div className="mb-4">
            <UserProfile />
            {/* <Search size={20} />
        <RefreshCcw size={20} /> */}
          </div>
          <div className="h-[1px] w-full bg-accent my-4" />

          <NavMain />
          <div className="h-[1px] w-full bg-accent my-4" />
          <TaskListTab />
        </div>
      )}
    </>
  );
}
