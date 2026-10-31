/** Instante de expiración (ms desde epoch) leído del claim `exp` de un JWT; `undefined` si no se puede leer. Solo lee: no valida. */
export function tokenExpiryMs(token: string): number | undefined {
  try {
    const payload = token.split(".")[1];
    if (!payload) return undefined;
    const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(payload.length / 4) * 4, "="));
    const exp = (JSON.parse(json) as { exp?: unknown }).exp;
    return typeof exp === "number" && Number.isFinite(exp) ? exp * 1000 : undefined;
  } catch {
    return undefined;
  }
}

export type ExpiryHooks = {
  /** Faltan `warnSeconds` o menos para que venza el token vigente. Se llama una vez por token. */
  onExpiring: (expiresAtMs: number) => void;
  /** Llegó un token nuevo después de un aviso: la sesión se renovó. */
  onRenewed: () => void;
};

/**
 * Avisa antes de que venza el token que el host entrega. No renueva ni pide nada: solo observa los tokens que ya pasan
 * por `getAccessToken`, así que no cambia el contrato con el host ni agrega peticiones.
 */
export class ExpiryWatcher {
  private timer: ReturnType<typeof setTimeout> | undefined;
  private current: number | undefined;
  private warned = false;

  constructor(
    private readonly warnSeconds: number,
    private readonly hooks: ExpiryHooks,
  ) {}

  observe(token: string): void {
    const expiresAt = tokenExpiryMs(token);
    if (expiresAt === undefined || expiresAt === this.current) return;
    if (this.warned) this.hooks.onRenewed();
    this.warned = false;
    this.current = expiresAt;
    this.clear();
    const wait = expiresAt - this.warnSeconds * 1000 - Date.now();
    if (wait <= 0) this.fire(expiresAt);
    else this.timer = setTimeout(() => this.fire(expiresAt), wait);
  }

  dispose(): void {
    this.clear();
  }

  private fire(expiresAt: number): void {
    this.warned = true;
    this.hooks.onExpiring(expiresAt);
  }

  private clear(): void {
    if (this.timer !== undefined) clearTimeout(this.timer);
    this.timer = undefined;
  }
}
