"use client";

import { useMemo, useState } from "react";
import StatBadge from "@/app/components/ui/StatBadge";

const luckyNumbers = [3, 7, 9, 12, 17, 21, 28, 33, 42];

function hashSeed(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickBySeed<T>(arr: readonly T[], seed: number, offset: number): T {
  return arr[(seed + offset) % arr.length];
}

export default function HomeFunAstrologyGame() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [revealed, setRevealed] = useState(false);

  const prediction = useMemo(() => {
    const seedBase = `${name.trim().toLowerCase()}|${birthDate}`;
    const seed = hashSeed(seedBase || "mystery");

    return {
      future: pickBySeed(
        [
          "A surprise opportunity will appear when you least expect it.",
          "You are about to reconnect with someone important to your growth.",
          "A creative breakthrough is coming within the next 7 days.",
          "Your confidence will attract exactly the right people this week.",
          "A small decision today will unlock a big win soon.",
          "You will solve a problem that has been draining your energy.",
          "Your next project has strong success energy around it.",
          "Good news linked to work or study is close.",
          "A lucky timing window opens when you take the first step.",
          "You are entering a phase of calm focus and steady progress.",
        ],
        seed,
        7,
      ),
      color: pickBySeed(["Cyan", "Gold", "Emerald", "Ruby", "Silver", "Violet"], seed, 13),
      number: pickBySeed(luckyNumbers, seed, 23),
      mood: pickBySeed(["Focused", "Adventurous", "Curious", "Bold", "Calm", "Magnetic"], seed, 31),
      energy: 70 + (seed % 31),
    };
  }, [name, birthDate]);

  const canReveal = name.trim().length > 1 && birthDate.length > 0;

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Fun Astrology Oracle
            </h2>
            <p className="max-w-xl text-sm leading-6 text-white/62">
              Enter your details and reveal a playful future prediction.
            </p>
          </div>
          <div className="rounded-full border border-[color:var(--brand-signal)]/30 bg-[color:var(--brand-signal)]/15 px-3 py-1.5 text-xs text-[color:var(--brand-signal)]">
            Entertainment only
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs text-white/45">
              Your name
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="rounded-xl border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[color:var(--brand-primary)]/70"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs text-white/45">
              Birth date
            </span>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="rounded-xl border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white outline-none focus:border-[color:var(--brand-primary)]/70"
            />
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={!canReveal}
            onClick={() => setRevealed(true)}
            className="rounded-full border border-[color:var(--brand-primary)]/70 bg-[color:var(--brand-primary)]/20 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--brand-primary)]/30 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Reveal My Future
          </button>
          <button
            type="button"
            onClick={() => {
              setName("");
              setBirthDate("");
              setRevealed(false);
            }}
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/10"
          >
            Reset
          </button>
        </div>

        {revealed && (
          <div className="mt-6 rounded-2xl border border-[color:var(--brand-signal)]/20 bg-[color:var(--brand-signal)]/10 p-5">
            <p className="text-sm leading-relaxed text-white/82">
              {prediction.future}
            </p>

            <div className="mt-4 grid gap-2 text-xs text-zinc-200 sm:grid-cols-2">
              <StatBadge
                label="Lucky Color"
                value={prediction.color}
                variant="compact"
              />
              <StatBadge
                label="Lucky Number"
                value={String(prediction.number)}
                variant="compact"
              />
              <StatBadge
                label="Daily Vibe"
                value={prediction.mood}
                variant="compact"
              />
              <StatBadge
                label="Cosmic Energy"
                value={`${prediction.energy}%`}
                variant="compact"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


