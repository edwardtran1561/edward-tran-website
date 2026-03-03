import type { LucideIcon } from "lucide-react";

type NavigationItemProps = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items: NavigationItemProps[];
};

export default NavigationItemProps;
