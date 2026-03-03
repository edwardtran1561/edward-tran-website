import {
  Gauge,
  Rss,
  Newspaper,
  Layers2,
  MessageSquareMore,
  Projector,
} from "lucide-react";
import type NavigationItemProps from "@/types/navigation";

const MAIN_NAVIGATION_ITEMS: NavigationItemProps[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Gauge,
    items: [],
  },
  {
    title: "Blog",
    url: "/dashboard/blog",
    icon: Rss,
    isActive: true,
    items: [
      {
        title: "Articles",
        url: "/dashboard/blog/articles",
        icon: Newspaper,
        items: [],
      },
      {
        title: "Categories",
        url: "/dashboard/blog/categories",
        icon: Layers2,
        items: [],
      },
      {
        title: "Comments",
        url: "/dashboard/blog/comments",
        icon: MessageSquareMore,
        items: [],
      },
    ],
  },
  {
    title: "Project",
    url: "/dashboard/projects",
    icon: Projector,
    items: [],
  },
];

export default MAIN_NAVIGATION_ITEMS;
