"use client";

import { Sidebar, SidebarRail, SidebarContent } from "@/components/ui/sidebar";
import MainNavigation from "./nav-main";
import MAIN_NAVIGATION_ITEMS from "@/constants/navigation";

const AppSidebar: React.FC<React.ComponentProps<typeof Sidebar>> = (props) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <MainNavigation items={MAIN_NAVIGATION_ITEMS} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
