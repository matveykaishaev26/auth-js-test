import AppSidebar from "@/shared/components/webapp/Sidebar/AppSidebar";
import { SidebarProvider } from "../SidebarProviders"; // Путь к вашему SidebarProvider
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SidebarProvider>
      <SessionProvider session={session}>
        <main className="flex min-h-screen max-[500px]">
          <div className="max-[500px]:fixed">
            {" "}
            <AppSidebar />
          </div>
          <div className="p-4 flex-1">{children}</div>
        </main>
      </SessionProvider>
    </SidebarProvider>
  );
}
