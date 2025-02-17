"use client";

import { ChevronUp, ChevronDown, Plus, FolderPen } from "lucide-react";
import { useState } from "react";
import CreateTask from "./CreateTask";
export default function TaskListTab() {
  const [isTaskListOpen, setIsTaskListOpen] = useState(false);
  return (
    <div
      onClick={() => setIsTaskListOpen((prev) => !prev)}
      className="text-xs text-muted-foreground p-1 flex items-center justify-between  cursor-pointer  transition  gap-2 rounded-lg  hover:bg-secondary/90"
    >
      <div className="flex gap-2 items-center">
        {isTaskListOpen === true ? (
          <ChevronUp className="" size={15} />
        ) : (
          <ChevronDown size={15} />
        )}
        <span>Список</span>
      </div>
      <CreateTask>
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-2  transition hover:bg-sidebar/90 rounded-lg"
        >
          <Plus size={15} />
        </div>
      </CreateTask>
    </div>
  );
}
