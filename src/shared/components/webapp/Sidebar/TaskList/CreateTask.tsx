"use client";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogContent,
} from "@/shared/components/ui/dialog";
import { PropsWithChildren, useState } from "react";
import CreateTaskInput from "./CreateTaskInput";
import ColorPick from "./ColorPick";
export default function CreateTask({ children }: PropsWithChildren) {
  const colors = [
    "#fff",
    "rgb(255, 97, 97)", // Тёмно-розовый
    "rgb(255, 172, 56)", // Оранжевый
    "rgb(255, 211, 36)", // Жёлтый
    "rgb(230, 234, 73)", // Светло-жёлтый
    "rgb(53, 216, 112)", // Светло-зелёный
    "rgb(76, 161, 255)", // Голубой
    "rgb(110, 117, 244)", // Синий
  ];
  const [activeColor, setActiveColor] = useState<string>(colors[0]);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Добавить задачу</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CreateTaskInput />
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Цвет:</span>
          <ColorPick activeColor={colors[0]} colors={colors} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
{
  /* <div className="flex gap-2">
            {colors.map((item) => (
              <div
                onClick={() => setColor(item)}
                style={{
                  backgroundColor: item,
                }}
                className={`rounded-xl cursor-pointer h-5 w-5 ${item === color ? 'border-[2px] border-gray-700' : ''}`}
                key={item}
              />
            ))}
          </div> */
}
