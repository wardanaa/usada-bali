"use client";

import { ReactNode } from "react";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

let toastListeners: ((toast: Toast) => void)[] = [];
let toastId = 0;

export function subscribeToToasts(listener: (toast: Toast) => void): () => void {
  toastListeners.push(listener);
  return () => {
    toastListeners = toastListeners.filter((l) => l !== listener);
  };
}

function showToast(message: string, type: ToastType): void {
  const id = `toast-${++toastId}`;
  const toast: Toast = { id, message, type };
  toastListeners.forEach((listener) => listener(toast));

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    dismissToast(id);
  }, 4000);
}

export function dismissToast(id: string): void {
  toastListeners.forEach((listener) =>
    listener({ id, message: "", type: "info" })
  );
}

export const toast = {
  success: (message: string) => showToast(message, "success"),
  error: (message: string) => showToast(message, "error"),
  warning: (message: string) => showToast(message, "warning"),
  info: (message: string) => showToast(message, "info"),
};

interface ToastContextValue {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

import { createContext, useContext, useEffect, useState } from "react";

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToToasts((toast) => {
      if (toast.message) {
        setToasts((prev) => {
          // Avoid duplicates
          if (prev.some((t) => t.id === toast.id)) {
            return prev.map((t) => (t.id === toast.id ? toast : t));
          }
          return [...prev, toast];
        });
      } else {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }
    });

    return unsubscribe;
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToasts() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToasts must be used within ToastProvider");
  }
  return context;
}
