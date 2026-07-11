"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
        console.log(theme);
      }}
      size="icon"
    >
      <SunIcon
        weight="duotone"
        className="size-[1.2rem] scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-90"
      />
      <MoonIcon
        weight="duotone"
        className="absolute size-[1.2rem] scale-0 rotate-90 transition-all duration-500 dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
