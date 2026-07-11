"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { cn, scrollTo } from "@/lib/utils";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

const NAV_LINKS = [
  { id: "about", label: "Обо мне" },
  { id: "stack", label: "Стек" },
  { id: "projects", label: "Проекты" },
  { id: "questions", label: "Вопросы" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={cn(
            "h-16 rounded-xl bg-background/70 backdrop-blur-xl px-4",
            "flex justify-between md:grid md:grid-cols-[1fr_auto_1fr] items-center",
          )}
        >
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight"
          >
            <span className="text-gradient">lonam</span>.dev
          </Link>

          <nav className="hidden md:flex items-center gap-1 mx-auto">
            {NAV_LINKS.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollTo(link.id)}
                className="text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="flex justify-self-end items-center gap-1 md:ml-0">
            <ThemeToggle />
            <Button onClick={() => scrollTo("contacts")}>Связаться</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
