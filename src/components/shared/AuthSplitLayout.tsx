"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function AuthSplitLayout({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  const isDark = resolvedTheme === "dark";

  const loginPanel = (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-card via-background to-secondary p-8">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );

  const logoPanel = (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-card p-8">
      <Logo size={220} />
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Omega Exchange</h2>
        <p className="text-sm text-muted-foreground">
          El último paso hacia tu libertad financiera
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="absolute right-6 top-6 z-10">
        <ThemeToggle />
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        <AnimatePresence mode="popLayout" initial={false}>
          {isDark ? (
            <motion.div
              key="login-left"
              layout
              layoutId="login-panel"
              className="flex flex-1"
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {loginPanel}
            </motion.div>
          ) : (
            <motion.div
              key="logo-left"
              layout
              layoutId="logo-panel"
              className="flex flex-1"
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {logoPanel}
            </motion.div>
          )}

          {isDark ? (
            <motion.div
              key="logo-right"
              layout
              layoutId="logo-panel"
              className="flex flex-1"
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {logoPanel}
            </motion.div>
          ) : (
            <motion.div
              key="login-right"
              layout
              layoutId="login-panel"
              className="flex flex-1"
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {loginPanel}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}