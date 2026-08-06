"use client";

import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="space-y-4 text-center">
                <h1 className="text-3xl font-bold">
                    Something went wrong
                </h1>

                <p className="text-muted-foreground">
                    {error.message}
                </p>

                <Button onClick={reset}>
                    Try Again
                </Button>
            </div>
        </div>
    );
}