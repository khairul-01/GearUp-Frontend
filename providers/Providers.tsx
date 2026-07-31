"use client";

import { Toaster } from "@/components/ui/sonner";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <>
      {children}

      <Toaster richColors position="top-right" />
    </>
  );
}