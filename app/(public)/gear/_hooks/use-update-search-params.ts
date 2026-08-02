"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useUpdateSearchParams() {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  function update(
    key: string,
    value: string
  ) {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    const current =
      params.get(key) ?? "";

    if (current === value) {
      return;
    }

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.replace(
      `${pathname}?${params.toString()}`
    );
  }

  return {
    searchParams,
    update,
  };
}