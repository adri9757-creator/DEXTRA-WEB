import { useSyncExternalStore } from "react";
import { getConsent, subscribe, type ConsentRecord } from "@/lib/consent";

/** Estado de consentimiento reactivo (se actualiza al guardar una decisión). */
export function useConsent(): ConsentRecord | null {
  return useSyncExternalStore(subscribe, getConsent, () => null);
}
