"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { TextAnimate } from "../ui/text-animate";
import Grainient from "../ui/Grainient";

const CHANNELS = [
  {
    name: "Telegram",
    handle: "@l0nam_0",
    description: "Быстрее всего отвечаю здесь",
    href: "https://t.me/l0nam_0",
    icon: FaTelegramPlane,
    color: "text-sky-500",
    bgColor: "bg-sky-500",
  },
  {
    name: "Discord",
    handle: "@lonam",
    description: "Для тех, кто привык к звонкам",
    href: "https://discord.com/users/539016515706683393",
    icon: FaDiscord,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500",
  },
];

export function Contacts() {
  return (
    <section className="py-24 container" id="contacts">
      <div className="relative w-full p-6 lg:p-12 text-white rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <Grainient
            color1="#00a16b"
            color2="#00bc7d"
            color3="#9ae600"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <TextAnimate
              className="title font-heading! mb-4 max-w-xl"
              once
              delay={0.1}
            >
              Готовы начать? Мне хватит пары строк
            </TextAnimate>

            <TextAnimate
              className="max-w-xl text-lg leading-relaxed"
              once
              delay={0.3}
            >
              Опишите задачу в двух словах — ссылку на референс, дедлайн или
              просто «хочу такой же сайт». Отвечаю обычно в течение пары часов,
              обсуждаем детали и стартуем.
            </TextAnimate>
          </div>

          <div className="flex w-full flex-col gap-3.5">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;

              return (
                <Link
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    channel.bgColor,
                    "p-5 rounded-2xl flex-1 select-none group",
                    "flex flex-col justify-between gap-10",
                    "transition-transform duration-300 hover:-translate-y-0.5",
                  )}
                >
                  <div className="size-13 bg-white flex items-center justify-center rounded-xl shadow-lg">
                    <Icon size={30} className={channel.color} />
                  </div>

                  <div className="w-fit overflow-hidden">
                    <p className="text-sm text-white/75">{channel.handle}</p>

                    <h2 className="flex items-center gap-1.5 text-xl font-heading font-semibold tracking-tight">
                      {channel.name}
                      <ArrowUpRightIcon
                        size={25}
                        weight="bold"
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </h2>

                    <p className="text-sm text-white/75">
                      {channel.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
