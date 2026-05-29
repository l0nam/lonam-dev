import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Лого */}
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

        {/* Центр */}
        <p className="text-xs text-muted-foreground/60 text-center">
          Собрано на{" "}
          <span className="text-muted-foreground">
            Next.js · Tailwind · Framer Motion
          </span>{" "}
          — {year}
        </p>

        {/* Статус */}
        <p className="text-xs">
          <span className="text-lime-500">[</span> открыт к работе{" "}
          <span className="text-lime-500">]</span>
        </p>
      </div>
    </footer>
  );
}
