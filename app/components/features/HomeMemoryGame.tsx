"use client";

import { useEffect, useMemo, useState } from "react";
import confetti from "canvas-confetti";
import StatBadge from "@/app/components/ui/StatBadge";

type PlayState = "idle" | "show" | "input" | "failed";

const BASE_CELLS = 6;
const MAX_LEVEL = 8;

function randomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

export default function HomeMemoryGame() {
  const [state, setState] = useState<PlayState>("idle");
  const [level, setLevel] = useState(1);
  const [bestLevel, setBestLevel] = useState(1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [inputIndex, setInputIndex] = useState(0);
  const [activeCell, setActiveCell] = useState<number | null>(null);

  const cellsCount = useMemo(
    () => Math.min(BASE_CELLS + level - 1, 12),
    [level],
  );

  const startLevel = (nextLevel: number) => {
    const sequenceLength = 2 + nextLevel;
    const nextSequence = Array.from({ length: sequenceLength }, () =>
      randomIndex(Math.min(BASE_CELLS + nextLevel - 1, 12)),
    );

    setLevel(nextLevel);
    setSequence(nextSequence);
    setInputIndex(0);
    setState("show");
  };

  const startGame = () => {
    startLevel(1);
  };

  useEffect(() => {
    if (state !== "show") return;

    let i = 0;
    const interval = window.setInterval(() => {
      if (i >= sequence.length) {
        window.clearInterval(interval);
        setActiveCell(null);
        setState("input");
        return;
      }

      setActiveCell(sequence[i]);
      window.setTimeout(() => setActiveCell(null), 350);
      i += 1;
    }, 560);

    return () => window.clearInterval(interval);
  }, [state, sequence]);

  const handlePick = (index: number) => {
    if (state !== "input") return;

    if (sequence[inputIndex] !== index) {
      setState("failed");
      setBestLevel((prev) => Math.max(prev, level));
      return;
    }

    const nextInput = inputIndex + 1;
    setInputIndex(nextInput);

    if (nextInput >= sequence.length) {
      const nextLevel = level + 1;

      if (nextLevel > MAX_LEVEL) {
        confetti({ particleCount: 140, spread: 85, origin: { y: 0.7 } });
        setBestLevel((prev) => Math.max(prev, level));
        setState("idle");
        return;
      }

      window.setTimeout(() => startLevel(nextLevel), 700);
    }
  };

  const subtitle =
    state === "idle"
      ? "Memorize the flash sequence and replay it."
      : state === "show"
        ? "Watch carefully..."
        : state === "input"
          ? "Your turn. Repeat the pattern."
          : "Wrong pick. Try again from level 1.";

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Pattern Memory Rush
            </h2>
            <p className="max-w-xl text-sm leading-6 text-white/62">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/75">
            <StatBadge label="Level" value={String(level)} />
            <StatBadge label="Best" value={String(bestLevel)} />
            <StatBadge
              label="Progress"
              value={`${Math.min(inputIndex, sequence.length)}/${sequence.length || 0}`}
            />
          </div>
        </div>

        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns:
              cellsCount <= 8
                ? "repeat(4, minmax(0, 1fr))"
                : "repeat(6, minmax(0, 1fr))",
          }}
        >
          {Array.from({ length: cellsCount }).map((_, index) => {
            const isActive = activeCell === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => handlePick(index)}
                disabled={state !== "input"}
                className={`h-14 rounded-xl border transition-all duration-200 sm:h-16 ${
                  isActive
                    ? "border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)]/25 shadow-[0_0_16px_rgba(91,124,255,0.35)]"
                    : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                }`}
                aria-label={`cell-${index}`}
              />
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {(state === "idle" || state === "failed") && (
            <button
              type="button"
              onClick={startGame}
              className="rounded-full border border-[color:var(--brand-primary)]/70 bg-[color:var(--brand-primary)]/20 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--brand-primary)]/30"
            >
              {state === "failed" ? "Try Again" : "Start Game"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


