import { ChartColumn, Crown, LogOut, Settings } from "lucide-react";
import UserData from "./UserData";
// import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/shared/components/ui/context-menu";
import { SignOut } from "@/shared/components/ui/signOut";
export function UserProfile() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {" "}
        <UserData />{" "}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Настройки профиля
          <ContextMenuShortcut>
            <Settings size={15} />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Статистика
          <ContextMenuShortcut>
            <ChartColumn size={15} />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Премиум
          <ContextMenuShortcut>
            <Crown size={15} />
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <SignOut>
          <ContextMenuItem inset>
            Выход
            <ContextMenuShortcut>
              <LogOut size={15} />
            </ContextMenuShortcut>
          </ContextMenuItem>
        </SignOut>
      </ContextMenuContent>
    </ContextMenu>
  );
}
