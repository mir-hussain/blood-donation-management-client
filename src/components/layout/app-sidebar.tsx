import { Bot, Settings2, SquareTerminal } from "lucide-react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

// This is sample data.

const adminRoutes = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: SquareTerminal,
    isActive: true,
  },
  {
    title: "Hospitals Management",
    url: "/admin/hospital-management",
    icon: Bot,
  },
  {
    title: "User Management",
    url: "/admin/user-management",
    icon: Settings2,
  },
];

const receptionistRoutes = [
  {
    title: "Dashboard",
    url: "/receptionist",
    icon: SquareTerminal,
    isActive: true,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useAppSelector(selectCurrentUser);

  const data = {
    user: {
      name: user!.name,
      email: user!.email,
    },
    navMain: user!.role === "admin" ? adminRoutes : receptionistRoutes,
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h1 className="truncate">Blood Link</h1>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
