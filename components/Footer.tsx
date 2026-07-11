import { cn } from "@/lib/utils";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-20">
      <div className="rounded-3xl border px-6 py-20">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <Link
                href="/"
                className="font-heading text-lg font-semibold tracking-tight"
              >
                <span className="text-gradient">lonam</span>
                <span>.dev</span>
              </Link>

              <p className="mt-2 max-w-md text-muted-foreground">
                Разработка современных сайтов, веб-приложений и интерфейсов с
                вниманием к каждой детали.
              </p>
            </div>

            <p className="text-muted-foreground">
              Next.js · React · TailwindCSS · shadcn/ui
            </p>
          </div>

          <div className="my-6 h-px bg-border" />

          <div
            className={cn(
              "flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between",
              "text-center",
            )}
          >
            <p>© {new Date().getFullYear()} lonam. Все права защищены.</p>
            <p>Сделано с ❤️ и большим количеством кофе</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
