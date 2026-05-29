"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  GithubLogoIcon,
  StarIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  live?: string;
  featured?: boolean;
  status: "done" | "wip" | "archive";
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "GlobalCommunity",
    description:
      "Лендинг для Minecraft-сервера с анимированными блоками, FAQ и всей необходимой информацей о сервере.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    live: "https://globalcommunity.ru",
    featured: true,
    status: "done",
  },
  {
    number: "02",
    title: "Elunova",
    description:
      "",
    tags: ["React", "Tailwind", "shadcn/ui", "Framer Motion", "Radix UI"],
    live: "https://example.com",
    status: "archive",
  },
];

const statusStyles: Record<string, string> = {
  live: "text-lime-500 border-lime-500/30 bg-lime-500/10",
  wip: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  archive: "text-zinc-500 border-zinc-700 bg-zinc-800/50",
};

const statusLabel: Record<string, string> = {
  done: "готово",
  wip: "в работе",
  archive: "архив",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col p-6 rounded-2xl border hover:border-lime-500/25 transition-all duration-300"
    >
      {/* Номер + статус */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground/30">
          {project.number}
        </span>
        <span
          className={[
            "text-[9px] tracking-widest uppercase px-2 py-0.5 rounded border",
            statusStyles[project.status] ?? statusStyles["live"],
          ].join(" ")}
        >
          {statusLabel[project.status] ?? project.status}
        </span>
      </div>

      {/* Название */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-lime-500 flex items-center gap-3 transition-colors duration-200">
        {project.title}

        {project.featured && (
          <StarIcon size={15} weight="fill" className="text-yellow-500" />
        )}
      </h3>

      {/* Описание */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Теги */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded text-muted-foreground border"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Ссылки */}
      {project.live && (
        <div className="flex items-center gap-3 pt-4 border-t">
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-auto gap-1 text-xs font-medium text-lime-500 hover:text-foreground transition-colors duration-200"
          >
            Демо
            <ArrowUpRightIcon size={12} weight="bold" />
          </Link>
        </div>
      )}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-5">
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
            <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">
              03 · Проекты
            </span>
            <span className="h-px w-16 bg-muted-foreground/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold font-heading tracking-tight mb-4">
            Что я уже <span className="text-lime-500">создал</span>
          </h2>
          <p className="text-muted-foreground max-w-[50ch] leading-relaxed">
            Подборка проектов, построенных чтобы учиться, экспериментировать и
            выпускать настоящие продукты.
          </p>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mt-10"
        >
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/projects" rel="noopener noreferrer">
              Все проекты
            </Link>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
