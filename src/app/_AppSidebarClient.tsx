"use client";

import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppSidebarClient({ children }: { children: ReactNode }) {
  //check it is on mobile page or not
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div className="flex flex-col w-full">
        <div className="p-2 border-b flex items-center gap-1">
          <SidebarTrigger />
          <span className="text-xl text-nowrap">Jobs</span>
        </div>
        <div className="flex-1 flex">{children}</div>
      </div>
    );
  }
  return children;
}
