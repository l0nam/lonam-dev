"use client";

import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  CircleIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";

type TechItem = {
  name: string;
  category: string;
  description: string;
  tag?: {
    label?: string;
    type: "learning" | "continue";
  };
};

const CORE_STACK: TechItem[] = [
  {
    name: "Next.js",
    category: "Фреймворк",
    description: "App Router, Server Components, API routes, ISR, SSG",
  },
  {
    name: "TypeScript",
    category: "Язык",
    description: "Строгий режим, дженерики, utility types, type guards",
  },
  {
    name: "Tailwind CSS",
    category: "Стилизация",
    description: "Utility-first, кастомные токены, адаптивные сетки",
  },
  {
    name: "shadcn/ui",
    category: "UI-библиотека",
    description: "Примитивы Radix, компоненты в собственном коде, a11y",
  },
  {
    name: "Framer Motion",
    category: "Анимации",
    description: "Variants, жесты, scroll-driven, layout-анимации",
  },
  {
    name: "React",
    category: "Библиотека",
    description: "Хуки, контекст, Suspense, конкурентный рендеринг",
  },
];

const EXPLORE_STACK: TechItem[] = [
  {
    name: "Zustand",
    category: "Стейт",
    description:
      "Лёгкий глобальный стейт. Заменяет перегруженный Context + useReducer",
    tag: {
      type: "continue",
    },
  },
  {
    name: "TanStack Query",
    category: "Данные",
    description:
      "Серверный стейт, кеширование, рефетчинг — забудь про ручные useEffect'ы",
    tag: {
      type: "continue",
    },
  },
  {
    name: "Zod",
    category: "Валидация",
    description:
      "TypeScript-first схемы для форм и API — работает в паре с RHF",
    tag: {
      type: "continue",
    },
  },
  {
    name: "React Hook Form",
    category: "Формы",
    description: "Производительные, неконтролируемые формы с отличным DX",
    tag: {
      type: "continue",
    },
  },
  {
    name: "Prisma",
    category: "ORM",
    description:
      "Типобезопасный клиент для БД — шаг в сторону fullstack Next.js",
    tag: {
      type: "continue",
    },
  },
  {
    name: "GSAP",
    category: "Pro-анимации",
    description:
      "Сложные scroll-анимации и timeline'ы, выходящие за пределы Framer Motion",
    tag: {
      type: "continue",
    },
  },
];

const getTagLabel = (tag?: {
  label?: string;
  type: "learning" | "continue";
}) => {
  if (tag?.label) return tag.label;

  // Дефолтные тексты по типу
  switch (tag?.type) {
    case "learning":
      return "В изучении";
    case "continue":
      return "Буду изучать";
    default:
      return "";
  }
};

// ── Карточка основного стека ──────────────────────────────────────────────────

function CoreCard({ item, index }: { item: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
      className="group p-4 rounded-xl border hover:border-lime-500/25 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="font-semibold text-sm group-hover:text-lime-500 transition-colors duration-200">
            {item.name}
          </p>
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
            {item.category}
          </p>
        </div>
        <CheckCircleIcon
          size={16}
          weight="duotone"
          className="text-lime-500 shrink-0 mt-0.5"
        />
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

// ── Карточка «что изучить дальше» ─────────────────────────────────────────────

function ExploreCard({ item, index }: { item: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
      className="group flex items-start gap-3 p-4 rounded-xl border hover:border-muted-foreground/50 transition-all duration-200"
    >
      <CircleIcon
        size={16}
        className="text-muted-foreground group-hover:text-lime-500 mt-0.5 shrink-0 transition-colors duration-200"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <p className="font-semibold text-sm">{item.name}</p>
          {item.tag && (
            <span
              className={`font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 rounded border ${item.tag?.type === "learning" ? "text-lime-500 border-lime-500/30 bg-lime-500/10" : "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"}`}
            >
              {getTagLabel(item.tag)}
            </span>
          )}
        </div>
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-1.5">
          {item.category}
        </p>
        <p className="text-xs text-muted-foreground/70 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// ── Секция ────────────────────────────────────────────────────────────────────

export default function Stack() {
  return (
    <section id="stack" className="py-28 px-5 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">
              02 · Стек
            </span>
            <span className="h-px w-16 bg-muted-foreground/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tighter mb-4">
            <span className="text-lime-500">Инструменты</span>, которыми я
            работаю
          </h2>
          <p className="text-muted-foreground max-w-[40ch] leading-relaxed">
            Мой рабочий стек — инструменты, которые помогают создавать нечто.
          </p>
        </motion.div>

        {/* Основной стек */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <p className="text-sm font-semibold">Основной стек</p>
            <span className="h-px flex-1 bg-muted-foreground/20" />
            <span className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">
              {CORE_STACK.length} инструментов
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CORE_STACK.map((item, i) => (
              <CoreCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Что изучить дальше */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <ArrowRightIcon size={14} className="text-lime-500" weight="bold" />
            <p className="text-sm font-semibold">Что дальше</p>
            <span className="h-px flex-1 bg-muted-foreground/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EXPLORE_STACK.map((item, i) => (
              <ExploreCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
