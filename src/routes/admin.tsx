import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import {
  type Submission,
  type SubmissionStatus,
  deleteSubmission,
  getSubmissions,
  isAdminAuthed,
  signInAdmin,
  signOutAdmin,
  toCSV,
  updateStatus,
} from "@/lib/submissions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Sundus Quran Academy" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  useEffect(() => setAuthed(isAdminAuthed()), []);

  return (
    <SiteLayout>
      <PageHero title="Admin Dashboard" subtitle="Manage trial and contact submissions" breadcrumb="Admin" />
      <section className="section-pad bg-off-white">
        <div className="container-page">
          {authed ? <Dashboard onSignOut={() => { signOutAdmin(); setAuthed(false); }} /> : <Login onSuccess={() => setAuthed(true)} />}
        </div>
      </section>
    </SiteLayout>
  );
}

function Login({ onSuccess }: { onSuccess: () => void }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (signInAdmin(pw)) onSuccess();
        else setErr(true);
      }}
      className="max-w-md mx-auto bg-white rounded-2xl border border-border p-7 shadow-card"
    >
      <h2 className="font-display text-2xl font-bold text-primary-dark">Admin Sign In</h2>
      <p className="text-sm text-muted-foreground mt-1">Enter the admin password to continue.</p>
      <label className="block mt-5">
        <span className="text-xs font-semibold text-foreground/80">Password</span>
        <input
          type="password"
          value={pw}
          onChange={(e) => { setPw(e.target.value); setErr(false); }}
          className="mt-1 w-full rounded-lg border border-input px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          autoFocus
        />
      </label>
      {err && <p className="text-sm text-red-600 mt-2">Incorrect password.</p>}
      <button type="submit" className="btn-primary w-full mt-5">Sign In</button>
      <p className="text-[11px] text-muted-foreground mt-3">
        Password is set in <code>src/lib/submissions.ts</code>. Submissions are stored in this browser only.
      </p>
    </form>
  );
}

function Dashboard({ onSignOut }: { onSignOut: () => void }) {
  const [items, setItems] = useState<Submission[]>([]);
  const [tab, setTab] = useState<"all" | "trial" | "contact">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | SubmissionStatus>("all");
  const [query, setQuery] = useState("");

  const refresh = () => setItems(getSubmissions());
  useEffect(() => {
    refresh();
    const h = () => refresh();
    window.addEventListener("sundus:submissions-changed", h);
    window.addEventListener("storage", h);
    return () => {
      window.removeEventListener("sundus:submissions-changed", h);
      window.removeEventListener("storage", h);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((s) => {
      if (tab !== "all" && s.kind !== tab) return false;
      if (statusFilter !== "all" && s.status !== statusFilter) return false;
      if (!q) return true;
      return [s.name, s.email, s.phone, (s as any).subject, (s as any).message]
        .filter(Boolean).join(" ").toLowerCase().includes(q);
    });
  }, [items, tab, statusFilter, query]);

  const counts = useMemo(() => ({
    all: items.length,
    trial: items.filter((s) => s.kind === "trial").length,
    contact: items.filter((s) => s.kind === "contact").length,
    new: items.filter((s) => s.status === "new").length,
  }), [items]);

  const exportCSV = () => {
    const csv = toCSV(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sundus-submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Exported ${filtered.length} row${filtered.length === 1 ? "" : "s"}.`);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex gap-2 flex-wrap">
          <Stat label="Total" value={counts.all} />
          <Stat label="Trials" value={counts.trial} />
          <Stat label="Contact" value={counts.contact} />
          <Stat label="New" value={counts.new} accent />
        </div>
        <div className="flex gap-2">
          <button onClick={exportCSV} className="btn-secondary">Export CSV</button>
          <button onClick={onSignOut} className="btn-ghost">Sign Out</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border shadow-soft overflow-hidden">
        <div className="p-4 border-b border-border flex flex-wrap items-center gap-3">
          <Tabs value={tab} onChange={setTab} options={[
            { v: "all", label: `All (${counts.all})` },
            { v: "trial", label: `Trials (${counts.trial})` },
            { v: "contact", label: `Contact (${counts.contact})` },
          ]} />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="rounded-lg border border-input px-3 py-2 text-sm bg-white"
          >
            <option value="all">All statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="enrolled">Enrolled</option>
          </select>
          <input
            placeholder="Search name, email, phone…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 min-w-[200px] rounded-lg border border-input px-3 py-2 text-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-off-white text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Details</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-4 py-10 text-center text-muted-foreground">
                  No submissions yet. New trial &amp; contact entries will appear here.
                </td></tr>
              )}
              {filtered.map((s) => (
                <tr key={s.id} className="border-t border-border align-top">
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    {new Date(s.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${s.kind === "trial" ? "bg-gold/15 text-gold" : "bg-primary-light text-primary-dark"}`}>
                      {s.kind}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium">{s.name}</td>
                  <td className="px-4 py-3">
                    <div><a href={`mailto:${s.email}`} className="text-primary hover:underline">{s.email}</a></div>
                    <div className="text-muted-foreground">{s.phone}</div>
                  </td>
                  <td className="px-4 py-3 max-w-sm">
                    {s.kind === "trial" ? (
                      <div className="text-foreground/80">{s.level} · {s.time}</div>
                    ) : (
                      <div>
                        <div className="font-medium">{s.subject}</div>
                        <div className="text-muted-foreground line-clamp-3 whitespace-pre-wrap">{s.message}</div>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={s.status}
                      onChange={(e) => { updateStatus(s.id, e.target.value as SubmissionStatus); }}
                      className="rounded border border-input px-2 py-1 text-xs bg-white"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="enrolled">Enrolled</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => { if (confirm("Delete this submission?")) deleteSubmission(s.id); }}
                      className="text-red-600 hover:underline text-xs"
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Submissions are stored in this browser's local storage. To share across devices and team members, enable Lovable Cloud later.
      </p>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className={`px-4 py-3 rounded-xl border ${accent ? "bg-gold/10 border-gold/30" : "bg-white border-border"}`}>
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
      <div className="text-xl font-bold text-primary-dark">{value}</div>
    </div>
  );
}

function Tabs<T extends string>({ value, onChange, options }: { value: T; onChange: (v: T) => void; options: { v: T; label: string }[] }) {
  return (
    <div className="inline-flex rounded-lg border border-border bg-off-white p-1">
      {options.map((o) => (
        <button
          key={o.v}
          onClick={() => onChange(o.v)}
          className={`px-3 py-1.5 text-sm rounded-md ${value === o.v ? "bg-white text-primary-dark shadow-sm font-semibold" : "text-muted-foreground"}`}
        >{o.label}</button>
      ))}
    </div>
  );
}
