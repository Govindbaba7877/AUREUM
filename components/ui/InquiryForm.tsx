"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface Props {
  context?: string;
  title?: string;
  compact?: boolean;
}

export default function InquiryForm({
  context,
  title = "Private Enquiry",
  compact = false,
}: Props) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: context ? `I would like to enquire about ${context}.` : "",
  });

  const handle = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    // dummy submit
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-gold-300/30 bg-gold-300/[0.04] p-8 text-center"
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-grad text-ink-950">
          <Check size={22} strokeWidth={2.5} />
        </div>
        <h3 className="mt-6 font-display text-3xl">Enquiry received.</h3>
        <p className="mt-3 text-sm text-bone-100/65">
          A partner will reach out within twenty-four hours. Thank you for the introduction.
        </p>
      </motion.div>
    );
  }

  return (
    <div className={compact ? "" : "rounded-3xl border border-white/[0.06] bg-ink-900 p-8 md:p-10"}>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/80">{title}</p>
      <h3 className="mt-3 font-display text-3xl">By introduction only.</h3>
      {context && (
        <p className="mt-2 text-xs text-bone-100/55">
          Regarding: <span className="text-gold-200">{context}</span>
        </p>
      )}

      <div className="mt-8 space-y-5">
        <Field label="Full Name">
          <input
            value={form.name}
            onChange={handle("name")}
            type="text"
            placeholder="Eleanor Whitfield"
            className="aureum-input"
          />
        </Field>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Email">
            <input
              value={form.email}
              onChange={handle("email")}
              type="email"
              placeholder="e.whitfield@residence.com"
              className="aureum-input"
            />
          </Field>
          <Field label="Phone">
            <input
              value={form.phone}
              onChange={handle("phone")}
              type="tel"
              placeholder="+1 212 555 0142"
              className="aureum-input"
            />
          </Field>
        </div>
        <Field label="Message">
          <textarea
            value={form.message}
            onChange={handle("message")}
            rows={4}
            placeholder="A few words about what you are looking for…"
            className="aureum-input resize-none"
          />
        </Field>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="max-w-[60%] text-[10px] uppercase tracking-[0.2em] text-bone-100/40">
          Your enquiry will be handled in strict confidence.
        </p>
        <MagneticButton variant="primary" onClick={submit}>
          Send Enquiry
        </MagneticButton>
      </div>

      <style jsx global>{`
        .aureum-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--color-bone);
          font-size: 1rem;
          padding: 0.75rem 0;
          transition: border-color 0.3s;
        }
        .aureum-input:focus {
          outline: none;
          border-color: #d4af37;
        }
        .aureum-input::placeholder {
          color: rgba(250, 248, 242, 0.25);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/55">
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}
