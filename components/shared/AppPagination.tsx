"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

interface Props {
  page: number;
  limit: number;
  total: number;
}

export default function AppPagination({
  page,
  limit,
  total,
}: Props) {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const totalPages = Math.ceil(total / limit);

  function navigate(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(newPage));

    router.push(`${pathname}?${params.toString()}`);
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() =>
              page > 1 && navigate(page - 1)
            }
          />
        </PaginationItem>

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={page === index + 1}
                onClick={() =>
                  navigate(index + 1)
                }
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              page < totalPages &&
              navigate(page + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}