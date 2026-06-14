import {
  LayoutDashboard,
  Users,
  MapPin,
  Coins,
  ArrowLeftRight,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  roles: ("ADMIN" | "USER")[];
}

export const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["ADMIN", "USER"],
  },
  {
    label: "Usuarios",
    href: "/users",
    icon: Users,
    roles: ["ADMIN"],
  },
  {
    label: "Direcciones",
    href: "/addresses",
    icon: MapPin,
    roles: ["ADMIN", "USER"],
  },
  {
    label: "Monedas",
    href: "/currencies",
    icon: Coins,
    roles: ["ADMIN", "USER"],
  },
  {
    label: "Convertir",
    href: "/currencies/convert",
    icon: ArrowLeftRight,
    roles: ["ADMIN", "USER"],
  },
];