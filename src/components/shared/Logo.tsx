"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Logo({ size = 200 }: { size?: number }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: size, height: size }} />;
  }

  const src = resolvedTheme === "dark" ? "/LogoWhite.png" : "/LogoBlack.png";

  return (
    <Image
      src={src}
      alt="Omega Exchange"
      width={size}
      height={size}
      priority
    />
  );
}