"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import confetti from "canvas-confetti";
import StatBadge from "@/app/components/ui/StatBadge";

type GameState = "idle" | "playing" | "finished";

const MAX_LEVEL = 6;
const GAME_SECONDS = 45;
const LEVEL_SCORE_STEP = 5;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function HomeArcadeGame() {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS);
  const [targetId, setTargetId] = useState(0);
  const [targetX, setTargetX] = useState(50);
  const [targetY, setTargetY] = useState(50);
  const [bestScore, setBestScore] = useState(0);
  const scoreRef = useRef(score);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  const level = useMemo(() => {
    const rawLevel = Math.floor(score / LEVEL_SCORE_STEP) + 1;
    return clamp(rawLevel, 1, MAX_LEVEL);
  }, [score]);

  const targetSize = useMemo(() => {
    return clamp(84 - (level - 1) * 10, 28, 84);
  }, [level]);

  const targetLifetimeMs = useMemo(() => {
    return clamp(1500 - (level - 1) * 170, 500, 1500);
  }, [level]);

  const accuracy = useMemo(() => {
    const totalAttempts = hits + misses;
    if (totalAttempts === 0) return 0;
    return Math.round((hits / totalAttempts) * 100);
  }, [hits, misses]);

  const moveTarget = () => {
    const min = 6;
    const max = 94;
    setTargetX(Math.random() * (max - min) + min);
    setTargetY(Math.random() * (max - min) + min);
    setTargetId((prev) => prev + 1);
  };

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setHits(0);
    setMisses(0);
    setTimeLeft(GAME_SECONDS);
    moveTarget();
  };

  const finishGame = useCallback((finalScore: number) => {
    setBestScore((prev) => Math.max(prev, finalScore));
    setGameState("finished");
  }, []);

  useEffect(() => {
    if (gameState !== "playing") return;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          finishGame(scoreRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [finishGame, gameState]);

  useEffect(() => {
    if (gameState !== "playing") return;

    const timeout = window.setTimeout(() => {
      setMisses((prev) => prev + 1);
      moveTarget();
    }, targetLifetimeMs);

    return () => window.clearTimeout(timeout);
  }, [gameState, targetId, targetLifetimeMs]);

  useEffect(() => {
    if (gameState !== "finished") return;

    if (score >= 25) {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.7 } });
    }
  }, [gameState, score]);

  const handleTargetClick = () => {
    if (gameState !== "playing") return;

    const levelBonus = level;
    setScore((prev) => prev + 1 + levelBonus);
    setHits((prev) => prev + 1);
    moveTarget();
  };

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Arcade Aim Challenge
            </h2>
            <p className="max-w-xl text-sm leading-6 text-white/62">
              Hit moving targets. Every 5 score points increases level and speed.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/75">
            <StatBadge label="Level" value={String(level)} />
            <StatBadge label="Score" value={String(score)} />
            <StatBadge label="Best" value={String(bestScore)} />
            <StatBadge label="Accuracy" value={`${accuracy}%`} />
            <StatBadge label="Time" value={`${timeLeft}s`} />
          </div>
        </div>

        <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/35 sm:h-96">
          {gameState === "idle" && (
            <Overlay
              title="Ready to play?"
              subtitle="Press start and survive 45 seconds."
              actionLabel="Start Game"
              onAction={startGame}
            />
          )}

          {gameState === "finished" && (
            <Overlay
              title="Run complete"
              subtitle={`Score: ${score} • Accuracy: ${accuracy}%`}
              actionLabel="Play Again"
              onAction={startGame}
            />
          )}

          {gameState === "playing" && (
            <button
              type="button"
              aria-label="target"
              onClick={handleTargetClick}
              className="absolute rounded-full border-2 border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)]/30 shadow-[0_0_24px_rgba(91,124,255,0.35)] transition-transform hover:scale-105"
              style={{
                width: `${targetSize}px`,
                height: `${targetSize}px`,
                left: `${targetX}%`,
                top: `${targetY}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="sr-only">Hit target</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Overlay({
  title,
  subtitle,
  actionLabel,
  onAction,
}: {
  title: string;
  subtitle: string;
  actionLabel: string;
  onAction: () => void;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/60 px-4 text-center">
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      <p className="max-w-lg text-sm leading-6 text-white/72">{subtitle}</p>
      <button
        type="button"
        onClick={onAction}
        className="rounded-full border border-[color:var(--brand-primary)]/70 bg-[color:var(--brand-primary)]/20 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--brand-primary)]/30"
      >
        {actionLabel}
      </button>
    </div>
  );
}
