"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "construction-notice-dismissed";
const EVENT = "construction-notice-change";

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

function getSnapshot() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return true;
}

export function ConstructionNotice() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [closed, setClosed] = useState(false);

  const close = useCallback(() => {
    setClosed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const open = !dismissed && !closed;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="construction-title"
        className="w-full max-w-md rounded-lg bg-white p-6 text-neutral-900 shadow-xl dark:bg-neutral-900 dark:text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="construction-title" className="text-lg font-semibold">
          🚧 Site em construção
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Este portfólio ainda não está 100% finalizado. Algumas páginas e
          detalhes podem mudar ou estar incompletos.
        </p>
        <button
          onClick={close}
          className="mt-4 w-full rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}