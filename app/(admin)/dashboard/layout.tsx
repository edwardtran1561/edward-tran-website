"use client";
import AppHeader from "@/components/admin/app-header";
import AppSidebar from "@/components/admin/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
