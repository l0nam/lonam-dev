"use client";

import { motion } from "framer-motion";
import {
  SparkleIcon,
  MapPinIcon,
  RocketIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";

// Типизированные варианты — ease передаётся как строка чтобы избежать TS-ошибки с number[]
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as const,
  },
};

const facts = [
  { icon: RocketIcon, label: "Сейчас", value: "Строю что-то крутое" },
  { icon: SparkleIcon, label: "Статус", value: "Открыт к предложениям" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Левая колонка: текст */}
          <div className="space-y-6">
            <motion.div
              variants={childVariants}
              className="flex items-center text-muted-foreground/50 gap-2"
            >
              <span className="font-mono text-xs tracking-widest uppercase">
                01 · Обо мне
              </span>
              <span className="h-px flex-1 bg-muted-foreground/50 max-w-20" />
            </motion.div>

            <motion.h2
              variants={childVariants}
              className="font-heading text-4xl md:text-5xl font-semibold tracking-tighter"
            >
              Строю веб, <span className="text-lime-500">один компонент</span>{" "}
              за раз.
            </motion.h2>

            <motion.p
              variants={childVariants}
              className="text-muted-foreground leading-relaxed max-w-[55ch]"
            >
              Привет, я{" "}
              <span className="text-foreground font-medium">lonam</span> —
              frontend-разработчик, которому нравится превращать идеи в чистые,
              интерактивные веб-интерфейсы. Работаю в экосистеме React и люблю
              точку пересечения кода и дизайна.
            </motion.p>

            <motion.p
              variants={childVariants}
              className="text-muted-foreground leading-relaxed max-w-[55ch]"
            >
              Мой стек строится вокруг{" "}
              <span className="text-foreground font-medium">
                Next.js, Tailwind CSS
              </span>{" "}
              и{" "}
              <span className="text-foreground font-medium">Framer Motion</span>
              . Важна производительность, доступность и тот самый финальный
              полировочный слой, который делает интерфейс{" "}
              <span className="text-lime-500 italic">живым</span>.
            </motion.p>

            <motion.a
              variants={childVariants}
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-lime-500 hover:text-foreground transition-colors duration-200 group"
            >
              Написать
              <span className="group-hover:translate-x-1 group-hover:scale-x-110 transition-transform duration-200">
                <ArrowRightIcon weight="bold" />
              </span>
            </motion.a>
          </div>

          {/* Правая колонка: карточки фактов */}
          <motion.div variants={childVariants} className="flex flex-col gap-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface-raised border hover:border-lime-500/25 transition-all duration-200 group"
              >
                <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-lime-500/10 text-lime-500 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={18} weight="duotone" />
                </span>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}

            {/* Декоративный сниппет */}
            <div className="p-4 rounded-xl bg-muted-foreground/3 border text-xs leading-6 text-muted-foreground">
              <span>{"// текущий статус"}</span>
              <div className="space-x-[1ch]">
                <span className="text-purple-400">const</span>
                <span className="text-blue-400">lonam</span>
                <span>= {"{"}</span>
              </div>
              <div className="ps-4">
                <div>
                  <span className="text-foreground">available</span>
                  <span>:</span> <span className="text-lime-500">true</span>
                  <span>,</span>
                </div>
                <div>
                  <span className="text-foreground">remote</span>
                  <span>:</span> <span className="text-lime-500">true</span>
                  <span>,</span>
                </div>
                <div>
                  <span className="text-foreground">tea</span>
                  <span>:</span>{" "}
                  <span className="text-amber-400">&quot;always&quot;</span>
                </div>
              </div>
              <span>{"}"}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
