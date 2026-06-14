"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/navigation";
import { useAuthStore } from "@/stores/authStore";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const role = useAuthStore((state) => state.role);

  const filteredItems = navItems.filter((item) =>
    item.roles.includes(role as "ADMIN" | "USER")
  );

  return (
    <aside className="hidden md:flex h-screen w-[280px] flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center px-6">
        <span className="text-xl font-bold text-foreground">Exchange</span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {filteredItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}