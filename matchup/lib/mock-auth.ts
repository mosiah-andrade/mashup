export interface MockSession {
  email: string;
  role?: "startup" | "investidor";
  createdAt: string;
}

const SESSION_KEY = "matchup-mock-session";

export function getMockSession(): MockSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as MockSession) : null;
  } catch {
    return null;
  }
}

export function startMockSession(email: string) {
  if (typeof window === "undefined") return;
  const current = getMockSession();
  window.localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      email,
      role: current?.role,
      createdAt: current?.createdAt ?? new Date().toISOString(),
    } satisfies MockSession),
  );
}

export function setMockRole(role: "startup" | "investidor") {
  if (typeof window === "undefined") return;
  const current = getMockSession();
  if (!current) return;
  window.localStorage.setItem(SESSION_KEY, JSON.stringify({ ...current, role }));
}

export function clearMockSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_KEY);
}
