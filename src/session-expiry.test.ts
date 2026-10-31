import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ExpiryWatcher, tokenExpiryMs } from "./session-expiry";

const jwt = (exp: number) => `h.${btoa(JSON.stringify({ exp })).replace(/=+$/, "")}.s`;

describe("tokenExpiryMs", () => {
  it("reads exp in milliseconds", () => expect(tokenExpiryMs(jwt(2000))).toBe(2_000_000));
  it("returns undefined for a token it cannot read", () => {
    expect(tokenExpiryMs("no-es-jwt")).toBeUndefined();
    expect(tokenExpiryMs("a.b.c")).toBeUndefined();
    expect(tokenExpiryMs(`h.${btoa("{}")}.s`)).toBeUndefined();
  });
});

describe("ExpiryWatcher", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(1_000_000));
  });
  afterEach(() => vi.useRealTimers());
  const hooks = () => ({ onExpiring: vi.fn(), onRenewed: vi.fn() });

  it("warns once, warnSeconds before the token expires", () => {
    const h = hooks();
    const watcher = new ExpiryWatcher(60, h);
    watcher.observe(jwt(1000 + 120)); // vence en 120 s
    vi.advanceTimersByTime(59_000);
    expect(h.onExpiring).not.toHaveBeenCalled();
    vi.advanceTimersByTime(2_000);
    expect(h.onExpiring).toHaveBeenCalledTimes(1);
    expect(h.onExpiring).toHaveBeenCalledWith((1000 + 120) * 1000);
    vi.advanceTimersByTime(300_000);
    expect(h.onExpiring).toHaveBeenCalledTimes(1);
  });

  it("warns immediately when the token is already inside the window", () => {
    const h = hooks();
    new ExpiryWatcher(60, h).observe(jwt(1000 + 30));
    expect(h.onExpiring).toHaveBeenCalledTimes(1);
  });

  it("does not warn twice for the same token and ignores unreadable tokens", () => {
    const h = hooks();
    const watcher = new ExpiryWatcher(60, h);
    watcher.observe(jwt(1000 + 30));
    watcher.observe(jwt(1000 + 30));
    watcher.observe("opaco");
    expect(h.onExpiring).toHaveBeenCalledTimes(1);
  });

  it("reports the renewal when a newer token arrives after a warning, and re-arms for it", () => {
    const h = hooks();
    const watcher = new ExpiryWatcher(60, h);
    watcher.observe(jwt(1000 + 30));
    watcher.observe(jwt(1000 + 300));
    expect(h.onRenewed).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(250_000);
    expect(h.onExpiring).toHaveBeenCalledTimes(2);
  });

  it("does not report a renewal when nothing had been warned", () => {
    const h = hooks();
    const watcher = new ExpiryWatcher(60, h);
    watcher.observe(jwt(1000 + 300));
    watcher.observe(jwt(1000 + 600));
    expect(h.onRenewed).not.toHaveBeenCalled();
  });

  it("dispose cancels a pending warning", () => {
    const h = hooks();
    const watcher = new ExpiryWatcher(60, h);
    watcher.observe(jwt(1000 + 300));
    watcher.dispose();
    vi.advanceTimersByTime(400_000);
    expect(h.onExpiring).not.toHaveBeenCalled();
  });
});
