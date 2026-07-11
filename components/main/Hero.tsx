"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { cn, scrollTo } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { TextAnimate } from "../ui/text-animate";

const BOTTOM = [
  {
    iconSrc: "/icons/Palette.svg",
    label: "Дизайн, который не стыдно показать клиенту",
  },
  {
    iconSrc: "/icons/Lightning.svg",
    label: "Загружается быстрее, чем вы моргнёте",
  },
  {
    iconSrc: "/icons/Code.svg",
    label: "Код, который легко развивать дальше",
  },
  {
    iconSrc: "/icons/World.svg",
    label: "Находят через Google и Яндекс",
  },
];

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.3,
    delay: delay,
    ease: "easeOut" as const,
  },
});

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="flex relative h-screen w-screen items-center justify-center bg-[#e9eeee] dark:bg-[#16171b] overflow-hidden">
      <div className="relative w-full h-full container flex flex-col items-start justify-center z-5">
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl md:text-5xl lg:text-7xl max-w-md mx-auto md:mx-0 lg:max-w-3xl tracking-tight font-heading font-bold"
          >
            Сайт, который не{" "}
            <AnimatedGradientText
              colorFrom="oklch(84.1% 0.238 128.85)"
              colorTo="oklch(69.6% 0.17 162.48)"
            >
              просто существует
            </AnimatedGradientText>
          </motion.h1>

          <TextAnimate
            delay={0.3}
            className="text-xl md:max-w-md lg:max-w-xl"
            startOnView={false}
            once
          >
            Верстаю быстрые, аккуратные интерфейсы на React и Next.js — от
            лендинга под конкретную задачу до продукта, который хочется
            открывать каждый день.
          </TextAnimate>

          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap justify-center md:justify-start gap-3"
          >
            <Button size="lg" onClick={() => scrollTo("contacts")}>
              Обсудить проект
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("projects")}
            >
              Посмотреть работы
            </Button>
          </motion.div>
        </div>

        <div className="hidden absolute bottom-24 lg:bottom-15 lg:flex flex-col lg:flex-row w-full gap-3 lg:gap-5">
          {BOTTOM.map((item, i) => (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.06 + 0.7,
                duration: 0.3,
                ease: "easeOut",
              }}
              className={cn(
                "relative overflow-hidden",
                "p-6 bg-background/80 backdrop-blur-md rounded-xl flex-1",
                "flex items-center",
              )}
              key={item.label}
            >
              <p className="tracking-tight max-w-[20ch] leading-snug">
                {item.label}
              </p>

              <Image
                src={item.iconSrc}
                alt="Icon"
                width={100}
                height={100}
                draggable={false}
                className="select-none pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 rotate-10 hue-rotate-270 h-full transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block absolute w-screen h-screen"
        >
          <Image
            src={
              theme === "light"
                ? "/images/background.png"
                : "/images/background-dark.png"
            }
            alt="Background"
            fill
            quality={100}
            className="absolute pointer-events-none object-cover transition-all duration-700"
          />
        </motion.div>
      )}
    </section>
  );
}