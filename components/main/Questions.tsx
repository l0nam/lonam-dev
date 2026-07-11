"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { PlusIcon } from "@phosphor-icons/react";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";
import { TextAnimate } from "../ui/text-animate";
import { fadeUp } from "./Hero";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: FAQItem[] = [
  {
    question: "Мне нужен дизайн — вы его делаете?",
    answer:
      "Я фронтенд-разработчик, а не дизайнер. Если у вас уже есть готовый макет в Figma или PSD — сверстаю его один в один, до пикселя. Если макета нет, могу сделать простой, но аккуратный сайт по описанию и референсам, которые вы пришлёте.",
  },
  {
    question: "Если заказ срочный?",
    answer:
      "Когда в очереди нет других заказов, могу закрыть ваш в кратчайшие сроки без доплат. Если сейчас я занят — работаю с доплатой за срочность, и в этом случае ваш проект встаёт в приоритет, а сроки я называю сразу и держу их.",
  },
  {
    question: "Что если найду баг?",
    answer:
      "Я даю гарантию: в течение 5 календарных дней после сдачи проекта исправляю любые найденные баги бесплатно. После этого срока правки и доработки обсуждаются индивидуально — но я всегда на связи и не пропадаю после оплаты.",
  },
  {
    question: "Что делать с проектом после получения?",
    answer:
      "Помогу с размещением: устанавливаю сайт на хостинг и привязываю ваш домен, если он уже есть. Хотите разместить всё самостоятельно — дам подробную пошаговую инструкцию и бесплатно сопровожу вас до полного запуска.",
  },
];

export function Questions() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 container" id="questions">
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="outline" className="mb-8">
              Прежде чем написать
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
            className="title max-w-xl mb-6"
          >
            Вопросы, которые{" "}
            <span className="text-gradient">задают чаще всего</span>
          </motion.h1>
          <TextAnimate
            delay={0.3}
            className="text-lg max-w-2xl leading-relaxed mb-10"
            once
          >
            Собрал ответы на то, о чём обычно спрашивают перед стартом. Не нашли
            своего вопроса — просто напишите, отвечу лично.
          </TextAnimate>

          <div className="max-w-3xl divide-y divide-border rounded-2xl ring-1 ring-foreground/10 overflow-hidden bg-card">
            {FAQ.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  key={item.question}
                >
                  <div key={item.question}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 lg:px-7 py-5 hover:bg-muted/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-semibold tracking-tight text-lg">
                        {item.question}
                      </span>
                      <PlusIcon
                        weight="bold"
                        className={cn(
                          "size-5 text-primary transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 lg:px-7 pb-5 text-muted-foreground leading-relaxed max-w-2xl">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.5 }}
          className="bg-accent dark:bg-zinc-900 rounded-3xl overflow-hidden relative h-100 lg:h-full w-full transition-colors duration-700"
        >
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-xl md:text-3xl font-heading font-semibold max-w-lg text-white mb-4">
              Остался вопрос, который не поместился в список?
            </p>

            <Button variant="outline" onClick={() => scrollTo("contacts")}>
              Спросить напрямую
            </Button>
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 z-5" />

          {mounted && (
            <Image
              src={
                theme === "light"
                  ? "/images/template.png"
                  : "/images/template-dark.png"
              }
              alt="Фон"
              fill
              draggable={false}
              className="pointer-events-none object-cover select-none"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
