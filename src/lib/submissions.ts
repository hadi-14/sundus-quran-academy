// Frontend-only submissions store backed by localStorage.
// NOTE: Data is only visible in the same browser where the form was submitted.
// For multi-device/shared access, enable Lovable Cloud later.

export type SubmissionStatus = "new" | "contacted" | "enrolled";

export type TrialSubmission = {
  id: string;
  kind: "trial";
  createdAt: string;
  status: SubmissionStatus;
  name: string;
  email: string;
  phone: string;
  time?: string;
  level?: string;
};

export type ContactSubmission = {
  id: string;
  kind: "contact";
  createdAt: string;
  status: SubmissionStatus;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type Submission = TrialSubmission | ContactSubmission;

const KEY = "sundus.submissions.v1";

function read(): Submission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Submission[]) : [];
  } catch {
    return [];
  }
}

function write(list: Submission[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent("sundus:submissions-changed"));
}

export function getSubmissions(): Submission[] {
  return read().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function addSubmission(
  data: Omit<TrialSubmission, "id" | "createdAt" | "status" | "kind"> & { kind: "trial" }
    | Omit<ContactSubmission, "id" | "createdAt" | "status" | "kind"> & { kind: "contact" }
) {
  const list = read();
  const entry: Submission = {
    ...(data as any),
    id: (typeof crypto !== "undefined" && "randomUUID" in crypto)
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    status: "new",
  };
  list.push(entry);
  write(list);
  return entry;
}

export function updateStatus(id: string, status: SubmissionStatus) {
  const list = read().map((s) => (s.id === id ? { ...s, status } : s));
  write(list);
}

export function deleteSubmission(id: string) {
  write(read().filter((s) => s.id !== id));
}

export function clearAll() {
  write([]);
}

export function toCSV(list: Submission[]): string {
  const headers = [
    "id", "kind", "createdAt", "status", "name", "email", "phone",
    "time", "level", "subject", "message",
  ];
  const esc = (v: unknown) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = list.map((s) =>
    headers.map((h) => esc((s as any)[h])).join(",")
  );
  return [headers.join(","), ...rows].join("\n");
}

// Admin auth (shared password, frontend-only).
// Change this in src/lib/submissions.ts — line below.
export const ADMIN_PASSWORD = "sundus-admin-2026";
const AUTH_KEY = "sundus.admin.auth.v1";

export function isAdminAuthed(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_KEY) === "1";
}
export function signInAdmin(pw: string): boolean {
  if (pw !== ADMIN_PASSWORD) return false;
  sessionStorage.setItem(AUTH_KEY, "1");
  return true;
}
export function signOutAdmin() {
  sessionStorage.removeItem(AUTH_KEY);
}
