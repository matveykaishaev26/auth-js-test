"use client";

import { Input } from "@/shared/components/ui/input";
import { Smile } from "lucide-react";
import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

interface Emoji {
  native: string; // Это поле будет содержать эмодзи
  id: string;
  name: string;
  colons: string;
  unified: string;
  skin: number;
  custom: boolean;
}
export default function CreateTaskInput() {
  const [emoji, setEmoji] = useState("");
  const handleEmojiSelect = (emoji: Emoji) => {
    console.log(emoji);
    setEmoji(emoji.native);
  };
  return (
    <div className="flex items-center border rounded-lg">
      <div className="px-2 border-r flex items-center h-full">
        <DropdownMenu>
          <DropdownMenuTrigger>
            {emoji ? (
              <div className="w-[22px]">{emoji}</div>
            ) : (
              <div className="w-[22px]">
                <Smile
                  className="text-muted-foreground cursor-pointer hover:text-muted-foreground/70"
                  //   size={22}
                />
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="p-0 border-none"
            side="bottom"
            align="start"
          >
            <Picker
              onEmojiSelect={handleEmojiSelect}
              data={data}
              previewPosition="none"
              locale="ru"
              emojiButtonSize={26}
              emojiSize={18}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Input className={"border-none"} placeholder="Имя" />
    </div>
  );
}
