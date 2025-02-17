'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
// import { SidebarMenuButton } from "@/shared/components/ui/sidebar";
import { ChevronsUpDown } from "lucide-react";
// import { auth } from "../../../../../../auth";
import { Button } from "@/shared/components/ui/button";
import { useSession } from "next-auth/react";

export default function UserData() {
  const { data: session } = useSession();
  return (
    <Button
      size="lg"
      variant={"ghost"}
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-full"
    >
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage
          src={session?.user?.image ?? undefined}
          alt={session?.user?.name ?? "User"}
        />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{session?.user.name}</span>
        <span className="truncate text-xs">{session?.user.email}</span>
      </div>
      <ChevronsUpDown className="ml-auto size-4" />
    </Button>
  );
}
