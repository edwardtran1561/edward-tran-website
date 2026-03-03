"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import type NavigationItemProps from "@/types/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNavigation: React.FC<{ items: NavigationItemProps[] }> = ({
  items,
}) => {
  const pathname = usePathname();

  const markActive = (items: NavigationItemProps[]): NavigationItemProps[] => {
    return items.map((item) => {
      const isCurrent = item.url === pathname;

      let childrenItems: NavigationItemProps[] = [];

      if (item.items && item.items.length > 0) {
        childrenItems = markActive(item.items);
      }

      return {
        ...item,
        items: childrenItems,
        isActive: isCurrent,
      };
    });
  };

  return (
    <SidebarGroup>
      {items.length && <SidebarGroupLabel>Explore</SidebarGroupLabel>}
      <SidebarMenu>
        {(markActive(items) || []).map((item) => (
          <Collapsible
            asChild
            defaultOpen={item.items.some((item) => item.isActive)}
            className="group/collapsible"
            key={item.title}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  isActive={item.isActive}
                  tooltip={item.title}
                >
                  {(() => {
                    if (item.items.length > 0) {
                      return (
                        <>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </>
                      );
                    }
                    return (
                      <Link
                        className="flex w-full cursor-pointer items-center gap-2"
                        href={item.url}
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    );
                  })()}
                  {item.items.length > 0 && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items.length > 0 && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          isActive={subItem.isActive}
                          asChild
                        >
                          <Link href={subItem.url}>
                            <span className="flex gap-2 flex-row items-center">
                              {subItem.icon && <subItem.icon size="16" />}
                              {subItem.title}
                            </span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default MainNavigation;
