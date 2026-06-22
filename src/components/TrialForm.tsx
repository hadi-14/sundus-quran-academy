import { useState } from "react";
import { toast } from "sonner";
import { addSubmission } from "@/lib/submissions";

type Props = { compact?: boolean };

export function TrialForm({ compact = false }: Props) {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    setTimeout(() => {
      addSubmission({
        kind: "trial",
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        phone: String(fd.get("phone") || ""),
        time: String(fd.get("time") || ""),
        level: String(fd.get("level") || ""),
      });
      toast.success("Trial booked! We'll contact you within 24 hours, in shaa Allah.");
      form.reset();
      setSubmitting(false);
    }, 500);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white rounded-2xl border border-border ${
        compact ? "p-6" : "p-7"
      } shadow-soft`}
    >
      <h3 className="font-display text-2xl font-bold text-primary-dark">Start Your Free Trial</h3>
      <p className="text-sm text-muted-foreground mt-1">No commitment — just one free class.</p>

      <div className="mt-5 space-y-3">
        <Field label="Full Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Phone (with country code)" name="phone" type="tel" required />
        <Select label="Preferred Time" name="time">
          {["5–7 AM", "7–9 AM", "9–11 AM", "11 AM–1 PM", "1–3 PM", "3–5 PM", "5–7 PM", "7–9 PM"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </Select>
        <Select label="Course Level" name="level">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </Select>
      </div>

      <button type="submit" disabled={submitting} className="btn-primary w-full mt-5 disabled:opacity-60">
        {submitting ? "Sending..." : "Get Started"}
      </button>
      <p className="text-[11px] text-muted-foreground mt-3 text-center">
        By submitting, you agree to our Terms & Privacy Policy.
      </p>
    </form>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground/80">{label}</span>
      <input
        {...rest}
        className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

function Select({ label, children, ...rest }: { label: string; children: React.ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground/80">{label}</span>
      <select
        {...rest}
        className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        {children}
      </select>
    </label>
  );
}
