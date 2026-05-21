"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Moon, Sun, Sunrise, Sunset } from "lucide-react";

function getSunTimes(lat: number = 53.86, lng: number = 30.56) {
  const now = new Date();
  const radians = Math.PI / 180;
  const degrees = 180 / Math.PI;

  const a = Math.floor((14 - (now.getMonth() + 1)) / 12);
  const y = now.getFullYear() + 4800 - a;
  const m = now.getMonth() + 1 + 12 * a - 3;

  const jDay =
    now.getDate() +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;

  const nStar = jDay - 2451545.0009 - lng / 360;
  const n = Math.floor(nStar + 0.5);
  const solarNoon = 2451545.0009 - lng / 360 + n;

  const M = 356.047 + 0.9856002585 * n;
  const C =
    1.9148 * Math.sin(M * radians) +
    0.02 * Math.sin(2 * M * radians) +
    0.0003 * Math.sin(3 * M * radians);
  const L = (M + 102.9372 + C + 180) % 360;

  const jTransit =
    solarNoon +
    0.0053 * Math.sin(M * radians) -
    0.0069 * Math.sin(2 * L * radians);
  const D =
    Math.asin(Math.sin(L * radians) * Math.sin(23.45 * radians)) * degrees;

  const cosOmega =
    (Math.sin(-0.83 * radians) -
      Math.sin(lat * radians) * Math.sin(D * radians)) /
    (Math.cos(lat * radians) * Math.cos(D * radians));

  if (cosOmega > 1 || cosOmega < -1) {
    return { sunrise: 6, sunset: 20 };
  }

  const omega = Math.acos(cosOmega) * degrees;
  const jSet = jTransit + omega / 360;
  const jRise = jTransit - omega / 360;

  const utcRise = 24 * (jRise - jDay) + 12;
  const utcSet = 24 * (jSet - jDay) + 12;

  const tzOffset = -now.getTimezoneOffset() / 60;
  let sunrise = (utcRise + tzOffset) % 24;
  let sunset = (utcSet + tzOffset) % 24;

  if (sunrise < 0) sunrise += 24;
  if (sunset < 0) sunset += 24;

  return { sunrise, sunset };
}

export default function Time() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [icon, setIcon] = useState<React.ReactNode>(
    <Sun size={45} className="text-yellow-500" />,
  );
  const [phaseText, setPhaseText] = useState("День");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Обновление времени и даты
      setTime(
        now.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );

      setDate(
        now.toLocaleDateString("ru-RU", {
          day: "2-digit",
          month: "long",
        }),
      );

      // Расчёт солнца
      const { sunrise, sunset } = getSunTimes();
      const sunriseHour = Math.floor(sunrise);
      const sunsetHour = Math.floor(sunset);

      let newIcon: React.ReactNode;
      let newText: string;

      if (hours < sunriseHour - 1 || hours >= sunsetHour + 2) {
        newIcon = <Moon size={45} className="text-slate-400" />;
        newText = "Ночь";
      } else if (hours < sunriseHour + 1) {
        newIcon = <Sunrise size={45} className="text-orange-500" />;
        newText = "Рассвет";
      } else if (hours > sunsetHour - 1) {
        newIcon = <Sunset size={45} className="text-orange-600" />;
        newText = "Закат";
      } else {
        newIcon = <Sun size={45} className="text-yellow-500" />;
        newText = "День";
      }

      setIcon(newIcon);
      setPhaseText(newText);
    };

    update(); // первый запуск
    const interval = setInterval(update, 1000); // каждую секунду

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="lg:max-w-120 w-full">
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Clock className="text-muted-foreground" size={18} />
            <span className="uppercase text-xs tracking-widest text-muted-foreground">
              Время
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-4xl font-semibold tracking-tighter font-heading">
            {time}
          </h1>
          <p className="text-muted-foreground text-sm">
            {date} · {phaseText}
          </p>
        </CardContent>

        {/* Динамическая иконка + текст */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 transition-all duration-700">
          {icon}
        </div>
      </Card>
    </div>
  );
}
