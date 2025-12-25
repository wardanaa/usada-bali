"use client";

import { useToasts } from "@/lib/toast";
import { useEffect } from "react";

export function ToastContainer() {
  const { toasts, removeToast } = useToasts();

  const getStyles = (type: string) => {
    const baseClasses =
      "mb-3 rounded-lg px-4 py-3 text-sm font-medium text-white shadow-lg animate-in fade-in slide-in-from-top-4 duration-300";
    switch (type) {
      case "success":
        return `${baseClasses} bg-green-500`;
      case "error":
        return `${baseClasses} bg-red-500`;
      case "warning":
        return `${baseClasses} bg-yellow-500`;
      case "info":
      default:
        return `${baseClasses} bg-blue-500`;
    }
  };

  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={getStyles(t.type)}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center justify-between gap-3">
            <span>{t.message}</span>
            <button
              onClick={() => removeToast(t.id)}
              className="ml-2 inline-flex text-white hover:opacity-75"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
