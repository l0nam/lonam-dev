"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownIcon, GithubLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";

// ── Данные терминала ──────────────────────────────────────────────────────────

const COMMAND = "whoami";

const OUTPUT_LINES = [
  { delay: 700, text: "Инициализация системного профиля..." },
  { delay: 1300, text: "Личность:   Frontend-разработчик" },
  { delay: 1900, text: "Фокус:      Next.js · Tailwind · Framer Motion" },
  { delay: 2500, text: "Статус:     Открыт к предложениям" },
  {
    delay: 3100,
    text: "Принцип:    Быстрый UI, чистый код",
  },
];

// Посимвольный набор
function useTypewriter(text: string, startDelay = 400, speed = 150) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, startDelay, speed]);

  return { displayed, done };
}

// ── Строка вывода ─────────────────────────────────────────────────────────────

function OutputLine({ text, delay }: { text: string; delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -4, height: 0 }}
        animate={{ opacity: 1, x: 0, height: "auto" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-start gap-2 leading-relaxed"
      >
        <span className="text-lime-500 font-semibold shrink-0">{">>"}</span>
        <span>{text}</span>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Главный компонент ─────────────────────────────────────────────────────────

export default function TerminalHero() {
  const { displayed: typedCommand, done: commandDone } = useTypewriter(
    COMMAND,
    500,
  );

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-dvh px-5 pt-20 pb-16 overflow-hidden"
    >
      {/* Фоновое свечение */}
      <div className="top-1/2 left-1/2 -translate-x-1/2 pointer-events-none absolute inset-0 overflow-hidden -translate-y-1/2 w-200 h-125 bg-lime-500/4 rounded-full blur-[120px]" />

      {/* Метка над терминалом */}
      <p className="text-sm tracking-widest uppercase font-medium mb-5">
        root@dev_portfolio:~$
      </p>

      {/* ── Окно терминала ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0.3, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ delay: 0.25, duration: 0.5, ease: "circInOut" }}
        className="relative w-full max-w-2xl rounded-2xl border overflow-hidden"
      >
        {/* Шапка окна */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-muted-foreground/10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <p className="absolute left-1/2 -translate-x-1/2 text-[11px] text-muted-foreground tracking-wide">
            lonam@portfolio — bash
          </p>
          <div className="sm:flex items-center gap-1.5 hidden text-[10px] text-lime-500 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-500 animate-pulse" />
            Сессия_Активна
          </div>
        </div>

        {/* Тело терминала */}
        <div className="p-5 text-sm leading-7 min-h-55 bg-muted-foreground/5">
          {/* Строка команды */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lime-500 font-semibold shrink-0">
              root@dev_portfolio:~$
            </span>
            <span>
              {typedCommand}
              {!commandDone && (
                <span className="inline-block w-2.25 h-[1.15em] bg-foreground align-middle ml-px animate-caret-blink" />
              )}
            </span>
          </div>

          {/* Строки вывода */}
          <div className="space-y-0.5">
            {OUTPUT_LINES.map((line, i) => (
              <OutputLine
                key={i}
                text={line.text}
                delay={commandDone ? line.delay - 700 : 99999}
              />
            ))}
          </div>

          {/* Курсор ввода */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lime-500 font-semibold">
              root@dev_portfolio:~$
            </span>
            <span className="inline-block w-2.25 h-[1.15em] bg-foreground align-middle animate-caret-blink" />
          </div>
        </div>
      </motion.div>

      {/* Социальные ссылки + прокрутка вниз */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 0.6, ease: "circInOut" }}
        className="flex flex-col items-center gap-6 mt-10"
      >
        <div className="flex items-center gap-3">
          <Button className="rounded-full" variant="outline" asChild>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogoIcon size={16} weight="fill" />
              GitHub
            </Link>
          </Button>
        </div>

        <Link
          href="#about"
          aria-label="Прокрутить вниз"
          className="hover:text-lime-500 transition-colors duration-200 animate-bounce"
        >
          <ArrowDownIcon size={18} />
        </Link>
      </motion.div>
    </section>
  );
}
