"use client";

import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { ArrowUpRightIcon, StarIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { TextAnimate } from "../ui/text-animate";
import { fadeUp } from "./Hero";

type Project = {
  title: string;
  description: string;
  src: string;
  tags?: string[];
  live?: string;
  support?: boolean;
  status: "done" | "wip" | "archive";
};

const PROJECTS: Project[] = [
  {
    title: "GlobalCommunity",
    description:
      "Лендинг для Minecraft-сервера: анимированные блоки, FAQ и вся информация о сервере в одном месте. Сейчас на моей поддержке — обновляется вместе с проектом.",
    src: "/screenshots/globalcommunity.png",
    live: "https://globalcommunity.ru",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Framer Motion"],
    support: true,
    status: "done",
  },
  {
    title: "Elunova",
    description:
      "Лендинг для Minecraft-сервера с системой миров, галереей построек и трёхшаговой инструкцией по входу — от первого клика до захода на сервер.",
    src: "/screenshots/elunova.png",
    live: "https://elunova-mcserver.vercel.app/",
    tags: ["NextJS", "TailwindCSS", "shadcn/ui", "Framer Motion"],
    status: "archive",
  },
];

const statusConfig = {
  done: {
    label: "готово",
    style: "text-primary border-primary bg-primary/3",
  },
  wip: {
    label: "в работе",
    style: "text-amber-500 border-amber-700/30 bg-amber-400/3",
  },
  archive: {
    label: "архив",
    style: "text-zinc-500 border-zinc-700/30 bg-zinc-800/3",
  },
};

export function Projects() {
  return (
    <section className="py-24 container" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.1 }}
        className="title text-center mx-auto max-w-xl mb-6"
      >
        Не слова, а <span className="text-gradient">живые проекты</span>
      </motion.h1>
      <TextAnimate
        delay={0.3}
        className="text-lg text-center mx-auto max-w-2xl leading-relaxed mb-10"
        once
      >
        Каждый сайт ниже — не заглушка из портфолио, а рабочий проект с
        реальными пользователями. Открывайте демо, кликайте, листайте — всё
        работает уже сейчас.
      </TextAnimate>

      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.title} />
        ))}
      </div>

      <div className="w-full flex flex-col items-center gap-3 mt-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-flex items-center text-center gap-1 text-sm text-muted-foreground"
        >
          <StarIcon weight="fill" className="text-amber-500" /> — проект на моей
          постоянной поддержке
        </motion.p>

        <TextAnimate
          className="text-sm text-muted-foreground text-center max-w-md"
          delay={0.2}
          once
        >
          Ещё сомневаетесь? Ниже — ответы на вопросы, которые обычно задают до
          старта.
        </TextAnimate>
        <p className="text-sm text-muted-foreground text-center max-w-md"></p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
    >
      <Card className="h-full">
        <CardHeader>
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden w-full h-50 lg:h-70 rounded-lg mb-3 border transition-colors hover:border-primary group"
            >
              <Badge
                variant="secondary"
                className="px-4 text-xs h-auto z-10 absolute left-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                Открыть <ArrowUpRightIcon weight="bold" />
              </Badge>
              <div className="absolute inset-0 bg-linear-to-tr from-black/40 z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Image
                src={project.src}
                alt={project.title}
                fill
                draggable={false}
                className="select-none object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          )}

          <CardTitle className="flex items-center justify-between">
            <p className="text-lg font-heading font-bold">{project.title}</p>

            <Badge
              className={cn(
                statusConfig[project.status].style,
                "h-6 text-xs px-3",
              )}
            >
              {statusConfig[project.status].label}
            </Badge>
          </CardTitle>

          {project.tags && (
            <CardDescription className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <Badge key={tag} className="text-xs px-2 h-auto!">
                  {tag}
                </Badge>
              ))}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="text-base">{project.description}</CardContent>
      </Card>
    </motion.div>
  );
}
