"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button size="icon-lg" variant="outline">
        <Monitor />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-lg" variant="outline" className="z-5">
          {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-0.5" align="center">
        <DropdownMenuItem
          className={theme === "light" ? "bg-foreground/10" : "cursor-pointer"}
          onClick={() => setTheme("light")}
        >
          <Sun /> Светлая
        </DropdownMenuItem>
        <DropdownMenuItem
          className={theme === "dark" ? "bg-foreground/10" : "cursor-pointer"}
          onClick={() => setTheme("dark")}
        >
          <Moon /> Темная
        </DropdownMenuItem>
        <DropdownMenuItem
          className={theme === "system" ? "bg-foreground/10" : "cursor-pointer"}
          onClick={() => setTheme("system")}
        >
          <Monitor /> Системная
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
