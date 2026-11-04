import { beforeEach, describe, expect, it, vi } from "vitest";
import { __resetConsentCache, acceptAll, getConsent, hasConsent, rejectAll, saveConsent, STORAGE_KEY } from "@/lib/consent";

beforeEach(() => {
  localStorage.clear();
  __resetConsentCache();
});

describe("gestor de consentimiento", () => {
  it("sin decisión, no hay consentimiento para ningún servicio", () => {
    expect(getConsent()).toBeNull();
    expect(hasConsent("googleMaps")).toBe(false);
    expect(hasConsent("elfsight")).toBe(false);
  });

  it("aceptar todo y rechazar todo", () => {
    acceptAll();
    expect(hasConsent("googleMaps")).toBe(true);
    expect(hasConsent("elfsight")).toBe(true);

    const reload = vi.fn();
    vi.stubGlobal("location", { ...window.location, reload });
    rejectAll();
    expect(hasConsent("googleMaps")).toBe(false);
    // Retirar un consentimiento ya dado recarga para descargar los scripts de terceros.
    expect(reload).toHaveBeenCalled();
    vi.unstubAllGlobals();
  });

  it("consentimiento granular por servicio", () => {
    saveConsent({ googleMaps: true });
    expect(hasConsent("googleMaps")).toBe(true);
    expect(hasConsent("elfsight")).toBe(false);
  });

  it("caduca a los 12 meses", () => {
    const old = new Date(Date.now() - 400 * 24 * 60 * 60 * 1000).toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, date: old, services: { googleMaps: true, elfsight: true } }));
    expect(getConsent()).toBeNull();
  });

  it("ignora registros de una versión anterior", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 0, date: new Date().toISOString(), services: { googleMaps: true } }));
    expect(hasConsent("googleMaps")).toBe(false);
  });
});
