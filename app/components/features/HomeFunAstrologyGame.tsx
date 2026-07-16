"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";
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
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [revealed, setRevealed] = useState(false);

  const prediction = useMemo(() => {
    const seedBase = `${name.trim().toLowerCase()}|${birthDate}`;
    const seed = hashSeed(seedBase || "mystery");

    return {
      future: pickBySeed(t.games.astrology.futures, seed, 7),
      color: pickBySeed(t.games.astrology.luckyColors, seed, 13),
      number: pickBySeed(luckyNumbers, seed, 23),
      mood: pickBySeed(t.games.astrology.moods, seed, 31),
      energy: 70 + (seed % 31),
    };
  }, [name, birthDate, t]);

  const canReveal = name.trim().length > 1 && birthDate.length > 0;

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              {t.games.astrology.title}
            </h2>
            <p className="max-w-xl text-sm leading-6 text-white/62">
              {t.games.astrology.subtitle}
            </p>
          </div>
          <div className="rounded-full border border-[color:var(--brand-signal)]/30 bg-[color:var(--brand-signal)]/15 px-3 py-1.5 text-xs text-[color:var(--brand-signal)]">
            {t.games.astrology.entertainmentOnly}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs text-white/45">
              {t.games.astrology.yourName}
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.games.astrology.namePlaceholder}
              className="rounded-xl border border-white/15 bg-black/35 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[color:var(--brand-primary)]/70"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs text-white/45">
              {t.games.astrology.birthDate}
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
            {t.games.astrology.reveal}
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
            {t.games.astrology.reset}
          </button>
        </div>

        {revealed && (
          <div className="mt-6 rounded-2xl border border-[color:var(--brand-signal)]/20 bg-[color:var(--brand-signal)]/10 p-5">
            <p className="text-sm leading-relaxed text-white/82">
              {prediction.future}
            </p>

            <div className="mt-4 grid gap-2 text-xs text-zinc-200 sm:grid-cols-2">
              <StatBadge
                label={t.games.astrology.luckyColor}
                value={prediction.color}
                variant="compact"
              />
              <StatBadge
                label={t.games.astrology.luckyNumber}
                value={String(prediction.number)}
                variant="compact"
              />
              <StatBadge
                label={t.games.astrology.dailyVibe}
                value={prediction.mood}
                variant="compact"
              />
              <StatBadge
                label={t.games.astrology.cosmicEnergy}
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


