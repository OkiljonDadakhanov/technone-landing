"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          We apologize for the inconvenience. Please try again or contact us if the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6"
          >
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="rounded-full px-6"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
