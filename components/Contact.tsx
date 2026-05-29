"use client";

import { motion } from "motion/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaDiscord, FaTelegram } from "react-icons/fa";

const LINKS = [
  {
    icon: FaTelegram,
    label: "Telegram",
    value: "t.me/l0nam_0",
    href: "https://t.me/l0nam_0",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    value: "discord.com/lonam",
    href: "https://discord.com/users/539016515706683393",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border p-8 md:p-14">
          {/* Фоновое свечение */}
          <div className="pointer-events-none absolute overflow-hidden bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-lime-500/4 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Левая часть */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">
                  04 · Контакт
                </span>
                <span className="h-px w-16 bg-muted-foreground/50" />
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-semibold font-heading max-w-[10ch] tracking-tighter mb-5">
                Давай создадим что-то{" "}
                <span className="text-lime-500">вместе</span>
              </h2>

              <p className="leading-relaxed max-w-[50ch]">
                Открыт к фрилансу, коллаборациям и full-time ролям. Напиши мне —
                отвечаю в течение 24 часов.
              </p>
            </motion.div>

            {/* Правая часть: терминальные ссылки */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
              className="rounded-2xl bg-muted-foreground/3 border p-5 font-mono text-sm"
            >
              {/* Шапка */}
              <div className="flex items-center gap-1.5 mb-4 pb-3 border-b">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[10px] text-muted-foreground tracking-widest uppercase">
                  contact_links.sh
                </span>
              </div>

              <div className="space-y-3">
                <div className="text-muted-foreground text-xs">
                  # Можно связаться тут
                </div>
                {LINKS.map(({ icon: Icon, label, value, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group transition-opacity duration-200"
                  >
                    <span className="text-lime-500 shrink-0">$</span>
                    <span className="text-muted-foreground">open</span>
                    <span className="flex items-center gap-1.5 group-hover:text-lime-500 transition-colors duration-200">
                      <Icon size={13} />
                      {value}
                      <ArrowUpRightIcon
                        size={15}
                        weight="bold"
                        className="opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200"
                      />
                    </span>
                  </Link>
                ))}
                <div className="flex items-center gap-3">
                  <span className="text-lime-500">$</span>
                  <span className="inline-block w-2 h-[1em] bg-foreground align-middle animate-caret-blink" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
