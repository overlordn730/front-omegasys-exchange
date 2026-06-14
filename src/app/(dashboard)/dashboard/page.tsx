"use client";

import { useAuthStore } from "@/stores/authStore";

export default function DashboardPage() {
  const email = useAuthStore((state) => state.email);
  const role = useAuthStore((state) => state.role);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Bienvenido, {email} ({role})
        </p>
      </div>
    </div>
  );
}