"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";

interface Props {
  price: number;
}

export default function MortgageCalculator({ price }: Props) {
  const [down, setDown] = useState(30); // %
  const [rate, setRate] = useState(5.25);
  const [years, setYears] = useState(25);

  const { monthly, principal, totalInterest } = useMemo(() => {
    const principal = price * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    const monthly = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
    const totalInterest = monthly * n - principal;
    return { monthly, principal, totalInterest };
  }, [price, down, rate, years]);

  return (
    <div className="rounded-3xl border border-white/[0.06] bg-ink-900 p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-200/80">
        Indicative Financing
      </p>
      <h3 className="mt-3 font-display text-3xl">Mortgage Calculator</h3>
      <p className="mt-2 text-xs text-bone-100/55">
        For guidance only. Aureum partners with private banking for final terms.
      </p>

      <div className="mt-8 space-y-6">
        <Range
          label="Down Payment"
          value={down}
          unit="%"
          min={10}
          max={70}
          step={5}
          onChange={setDown}
        />
        <Range
          label="Interest Rate"
          value={rate}
          unit="%"
          min={2}
          max={10}
          step={0.05}
          onChange={setRate}
          decimals={2}
        />
        <Range
          label="Term"
          value={years}
          unit=" yrs"
          min={10}
          max={30}
          step={5}
          onChange={setYears}
        />
      </div>

      <div className="hairline my-8" />

      <div className="space-y-3">
        <Row label="Principal" value={formatCurrency(principal)} />
        <Row label="Total Interest" value={formatCurrency(totalInterest)} />
        <Row
          label="Monthly Payment"
          value={formatCurrency(monthly)}
          big
        />
      </div>
    </div>
  );
}

function Range({
  label,
  value,
  unit,
  min,
  max,
  step,
  onChange,
  decimals = 0,
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  decimals?: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-100/55">
          {label}
        </label>
        <span className="font-display text-xl text-gold-grad">
          {value.toFixed(decimals)}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="aureum-range mt-3 w-full"
      />
    </div>
  );
}

function Row({ label, value, big = false }: { label: string; value: string; big?: boolean }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-sm text-bone-100/60">{label}</span>
      <span
        className={
          big
            ? "font-display text-3xl text-gold-grad"
            : "font-display text-lg text-bone-50/90"
        }
      >
        {value}
      </span>
    </div>
  );
}
