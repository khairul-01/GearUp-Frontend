"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./ThemeProvider";

interface Props {
  children: React.ReactNode;
}

export default function Providers({
  children,
}: Props) {
  return (
    <ThemeProvider>
      {children}

      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}