import { SignedIn } from "@/services/clerk/component/SignInStatus";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "../ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarClient";
import { ReactNode } from "react";

export function AppSidebar({
  children,
  content,
  footerButton,
}: {
  content: ReactNode;
  footerButton: ReactNode;
  children: ReactNode;
}) {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-y-hidden">
          {/* //Header */}
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">Jobs</span>
          </SidebarHeader>

          {/* //Content */}
          <SidebarContent>{content}</SidebarContent>

          {/* //Footer */}
          <SignedIn>
            <SidebarFooter>
              <SidebarMenu>
                {/* User or Organization */}
                <SidebarMenuItem>{footerButton}</SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>
        </Sidebar>
        <main className="flex-1">{children}</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
