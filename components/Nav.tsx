"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Стек", href: "#stack" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакт", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-surface/80 backdrop-blur-lg border-b" : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex justify-between sm:grid sm:grid-cols-[1fr_auto_1fr] items-center">
        {/* Логотип */}
        <Link
          href="/"
          className="text-sm font-semibold text-lime-500 tracking-tight flex items-center group select-none justify-self-start"
        >
          <span className="text-muted-foreground">~/</span>
          <span className="group-hover:text-foreground transition-colors duration-200">
            lonam
          </span>
          <span className="animate-caret-blink ml-0.5 text-muted-foreground">
            _
          </span>
        </Link>

        {/* Ссылки */}
        <nav className="hidden sm:flex items-center">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* CTA */}
        <Button
          className="rounded-full justify-self-end bg-lime-500 hover:bg-lime-400! text-muted"
          asChild
        >
          <Link href="#contact">Связаться</Link>
        </Button>
      </div>
    </motion.header>
  );
}
