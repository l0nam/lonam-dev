import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogContent,
} from "./animate-ui/components/radix/dialog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const CardProps: ProfileCardProps[] = [
  {
    title: "Telegram",
    icon: <FaTelegramPlane />,
    href: "https://t.me/l0nam_0",
  },
  {
    title: "Discord",
    icon: <FaDiscord />,
    href: "https://discord.com/users/539016515706683393",
  },
];

export default function ProfileCard() {
  const birthday = new Date("2007-08-21");
  const age = Math.floor((Date.now() - birthday.getTime()) / 3.15576e10);

  return (
    <Card className="w-full lg:max-w-120 pt-0 relative">
      <CardHeader className="h-20 bg-radial-[at_50%_100%] from-lime-50 via-green-400 to-emerald-900 to-90% relative">
        <h1 className="absolute left-1/2 top-1/2 -translate-1/2 font-heading text-2xl lg:text-3xl tracking-tighter text-white">
          Обо мне
        </h1>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold font-heading tracking-tight">
            l0nam
          </h1>
          <Badge variant="outline" className="flex items-center">
            <div className="relative">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 absolute bg-lime-500/50 rounded-full top-1/2 -translate-y-1/2 animate-ping z-0" />
            </div>
            Открыт к заказам
          </Badge>
        </div>

        <p className="text-muted-foreground text-sm mb-3">
          Frontend разработчик · {age} годиков
        </p>

        <div className="leading-relaxed mb-3">
          Занимаюсь веб-разработкой, пишу скрипты на Denizen и увлекаюсь
          графическим дизайном. Делаю сайты на заказ.
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "UI/UX",
            "Node.js",
            "Java",
            "Kotlin",
            "Denizen",
            "MC Plugins",
          ].map((tag, i) => (
            <Badge key={i} variant={i < 4 ? "default" : "secondary"}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-1 border-t">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="flex-1">
              Написать
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-linear-to-br via-emerald-50 dark:via-emerald-300/20">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">
                Связать со мной можно тут
              </DialogTitle>
              <DialogDescription className="max-w-xs">
                Быстрее всего отвечу в Телеграмм, но в дискорд также часто
                захожу!
              </DialogDescription>
            </DialogHeader>

            <div className="w-full flex gap-1">
              {CardProps.map((data, i) => (
                <Button
                  key={`btn-` + i}
                  className="flex-1"
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link
                    href={data.href}
                    aria-label={data.title}
                    target="_blank"
                  >
                    {data.icon}
                  </Link>
                </Button>
              ))}
            </div>

            <DialogClose asChild>
              <Button variant="default">Закрыть</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
        <Button size="lg" variant="secondary" className="flex-1 group" disabled>
          Портфолио{" "}
          <ArrowRight className="group-hover:translate-y-0.5 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}
