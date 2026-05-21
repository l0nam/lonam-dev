"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const GITHUB_USER = "l0nam";
const FEATURED_PROJECTS = ["lonam-dev"];

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  pushed_at: string;
  homepage: string;
}

export default function LatestProject() {
  const [project, setProject] = useState<Repo | null>(null);
  const [loading, setLoading] = useState(true);
  FEATURED_PROJECTS.map((name) => {
    console.log(name);
  });

  useEffect(() => {
    if (FEATURED_PROJECTS.length === 0) {
      setLoading(false);
      return;
    }

    const fetchLatest = async () => {
      try {
        const promises = FEATURED_PROJECTS.map((name) =>
          fetch(`https://api.github.com/repos/${GITHUB_USER}/${name}`).then(
            (res) => (res.ok ? res.json() : null),
          ),
        );

        const results = await Promise.all(promises);
        const validRepos = results.filter(Boolean) as Repo[];

        const latest = validRepos.sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
        )[0];

        setProject(latest);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  if (loading) {
    return (
      <Card className="w-full max-w-200 overflow-hidden pt-0 z-10">
        <CardHeader className="h-20 bg-radial-[at_50%_0%] from-lime-50 via-green-400 to-emerald-900 to-90% relative">
          <h1 className="absolute left-1/2 top-1/2 -translate-1/2 font-heading text-2xl md:text-3xl tracking-tighter text-white">
            Последний проект
          </h1>
        </CardHeader>
        <CardContent className="text-center flex-1">Загрузка...</CardContent>
      </Card>
    );
  }

  if (!project) return null;

  const liveUrl = project.homepage;

  // Автоматическое превью
  const previewUrl = `https://image.thum.io/get/viewportWidth/1920/${encodeURI(liveUrl)}`;

  return (
    <Card className="w-full h-full flex flex-col overflow-hidden pt-0 z-10">
      <CardHeader className="h-20 bg-radial-[at_50%_0%] from-lime-50 via-green-400 to-emerald-900 to-90% relative">
        <h1 className="absolute left-1/2 top-1/2 -translate-1/2 font-heading text-xl md:text-3xl tracking-tighter text-white">
          Последний проект
        </h1>
      </CardHeader>

      <CardContent>
        <div
          className={`relative bg-muted-foreground overflow-hidden rounded-xl ring-1 ring-foreground/10 ${project.description ? "h-55" : "h-73"}`}
        >
          <Image
            src={previewUrl}
            alt={project.name}
            fill
            draggable={false}
            className="object-cover transition-transform duration-500 scale-100 select-none group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute bottom-4 right-4">
            <Link href={liveUrl} target="_blank">
              <Badge className="px-4 h-6" variant="secondary">
                Посмотреть сайт <ExternalLink className="w-3 h-3" />
              </Badge>
            </Link>
          </div>
        </div>

        <Badge variant="outline" className="my-3">
          {project.language || "Next.js"}
        </Badge>

        <h3 className="text-2xl font-bold mb-2 transition-colors">
          {project.name}
        </h3>

        {project.description && (
          <p className="text-muted-foreground line-clamp-2 mb-5">
            {project.description || "Без описание"}
          </p>
        )}
      </CardContent>
      <CardFooter className="mt-auto w-auto">
        <Button size="lg" className="w-full" disabled>
          {/* <Link
            href="/projects"
            className={`flex w-full gap-2 text-primary font-medium text-sm ${project.description && "justify-end"}`}
          > */}
            Все проекты{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          {/* </Link> */}
        </Button>
      </CardFooter>
    </Card>
  );
}
