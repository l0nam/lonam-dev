"use client";

import { BookmarkSimpleIcon, ToolboxIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiReact,
  SiZod,
  SiPrisma,
  SiGsap,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { TextAnimate } from "../ui/text-animate";
import { Ripple } from "../ui/ripple";
import { DotPattern } from "../ui/dot-pattern";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type StackItem = {
  name: string;
  category: string;
  description: string;
  href?: string;
  icon: IconType;
  color: string;
  tag?: {
    label?: string;
    type: "learning" | "soon";
  };
};

const STACK: StackItem[] = [
  {
    name: "Next.js",
    category: "Фреймворк",
    description: "App Router, Server Components, API routes, ISR, SSG",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
    color: "text-foreground",
  },
  {
    name: "TypeScript",
    category: "Язык",
    description: "Строгий режим, дженерики, utility types, type guards",
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  {
    name: "Tailwind CSS",
    category: "Стилизация",
    description: "Utility-first, кастомные токены, адаптивные сетки",
    href: "https://tailwindcss.com/",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
  },
  {
    name: "shadcn/ui",
    category: "UI-библиотека",
    description: "Примитивы Radix, компоненты в собственном коде, a11y",
    href: "https://ui.shadcn.com/",
    icon: SiShadcnui,
    color: "text-foreground",
  },
  {
    name: "Framer Motion",
    category: "Анимации",
    description: "Variants, жесты, scroll-driven, layout-анимации",
    href: "https://motion.dev/",
    icon: SiFramer,
    color: "text-[#0055FF]",
  },
  {
    name: "React",
    category: "Библиотека",
    description: "Хуки, контекст, Suspense, конкурентный рендеринг",
    href: "https://react.dev/",
    icon: SiReact,
    color: "text-[#61DAFB]",
  },
  {
    name: "Zustand",
    category: "Стейт",
    description:
      "Лёгкий глобальный стейт. Заменяет перегруженный Context + useReducer",
    href: "https://zustand-demo.pmnd.rs/",
    icon: SiReact,
    color: "text-[#61DAFB]",
    tag: { type: "soon" },
  },
  {
    name: "Zod",
    category: "Валидация",
    description:
      "TypeScript-first схемы для форм и API — работает в паре с RHF",
    href: "https://zod.dev/",
    icon: SiZod,
    color: "text-[#408AFF]",
    tag: { type: "soon" },
  },
  {
    name: "React Hook Form",
    category: "Формы",
    description: "Производительные, неконтролируемые формы с отличным DX",
    href: "https://react-hook-form.com/",
    icon: SiReact,
    color: "text-[#EC5990]",
    tag: { type: "soon" },
  },
  {
    name: "Prisma",
    category: "ORM",
    description:
      "Типобезопасный клиент для БД — шаг в сторону fullstack Next.js",
    href: "https://www.prisma.io/",
    icon: SiPrisma,
    color: "text-[#2D3748]",
    tag: { type: "soon" },
  },
  {
    name: "GSAP",
    category: "Pro-анимации",
    description:
      "Сложные scroll-анимации и timeline'ы, выходящие за пределы Framer Motion",
    href: "https://gsap.com/",
    icon: SiGsap,
    color: "text-[#0AE448]",
    tag: { type: "soon" },
  },
];

const TAGS_CONFIG = {
  soon: "Буду изучать",
  learning: "Изучаю сейчас",
};

export function Stack() {
  const coreStack = STACK.filter((item) => !item.tag);
  const notCoreStack = STACK.filter((item) => item.tag).sort((a, b) => {
    const order = { learning: 0, soon: 1 };
    return order[a.tag!.type] - order[b.tag!.type];
  });

  return (
    <section
      className={cn(
        "py-24 relative overflow-hidden",
        "bg-linear-to-br from-lime-400 to-emerald-500",
        "dark:from-lime-950 dark:to-emerald-950",
        "transition-colors duration-700",
      )}
      id="stack"
    >
      <div className="container mx-auto text-white relative z-1">
        <TextAnimate className="title text-center mx-auto max-w-xl mb-6" once>
          Инструменты, на которых держится результат
        </TextAnimate>

        <TextAnimate
          delay={0.2}
          className="mb-10 text-lg max-w-2xl text-center mx-auto leading-relaxed"
          once
        >
          Не гонюсь за модой — выбираю то, что проверено и не сломается через
          полгода после сдачи проекта.
        </TextAnimate>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Основной стек */}
          <Card className="ring-0">
            <CardHeader className="text-center">
              <div className="mx-auto size-13 inline-flex items-center justify-center bg-primary rounded-full mb-2">
                <ToolboxIcon size={25} />
              </div>

              <CardTitle className="mx-auto text-xl">Основной стек</CardTitle>
              <CardDescription className="max-w-md mx-auto text-base">
                Провожу через это каждый проект — быстро, аккуратно и без
                компромиссов по качеству.
              </CardDescription>
            </CardHeader>

            <div className="relative mx-6">
              <div className="absolute inset-0 border rounded-xl overflow-hidden">
                <Ripple />
              </div>

              <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 gap-3 p-6">
                {coreStack.map((item, i) => (
                  <StackTile key={item.name} item={item} index={i} />
                ))}
              </div>
            </div>
          </Card>

          {/* Расширяю стек */}
          <Card className="ring-0">
            <CardHeader className="text-center">
              <div className="mx-auto size-13 inline-flex items-center justify-center bg-primary rounded-full mb-2">
                <BookmarkSimpleIcon size={25} />
              </div>

              <CardTitle className="mx-auto text-xl">Расширяю стек</CardTitle>
              <CardDescription className="max-w-md mx-auto text-base">
                Беру в работу по мере роста задач — от стейт-менеджмента до
                продвинутых анимаций.
              </CardDescription>
            </CardHeader>

            <div className="relative mx-6">
              <div className="absolute inset-0 border rounded-xl overflow-hidden">
                <DotPattern glow={true} />
              </div>

              <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 gap-3 p-6">
                {notCoreStack.map((item, i) => (
                  <StackTile key={item.name} item={item} index={i} />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function StackTile({ item, index }: { item: StackItem; index?: number }) {
  const Icon = item.icon;
  const tagLabel = item.tag
    ? item.tag.label || TAGS_CONFIG[item.tag.type]
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: (index ?? 0) * 0.04,
        duration: 0.4,
        ease: "easeOut",
      }}
      className="group/tile relative"
    >
      <Tooltip>
        <TooltipTrigger className="w-full">
          <Link
            href={item.href ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block outline-none"
            aria-label={`${item.name} — ${item.description}`}
          >
            <div
              className={cn(
                "relative flex flex-col items-center justify-center gap-2",
                "h-20 sm:h-22 rounded-xl border backdrop-blur-sm",
                "transition-all duration-300",
                "group-hover/tile:-translate-y-1",
              )}
            >
              {item.tag && (
                <span
                  className={cn(
                    "absolute -top-1 -right-1 size-2.5 rounded-full",
                    item.tag.type === "learning"
                      ? "bg-sky-400"
                      : "bg-amber-400",
                  )}
                  aria-hidden
                />
              )}

              <Icon
                className={cn(
                  item.color,
                  "transition-transform duration-300 group-hover/tile:scale-110",
                )}
                size={20}
              />

              <span className="text-xs leading-none truncate max-w-[90%]">
                {item.name}
              </span>
            </div>
          </Link>
        </TooltipTrigger>

        <TooltipContent className="flex flex-col max-w-60">
          <div className="flex items-center justify-between gap-2 w-full">
            <p className="font-heading font-semibold">{item.name}</p>

            {tagLabel && <span className="text-xs">{tagLabel}</span>}
          </div>

          <p className="leading-snug">{item.description}</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}
