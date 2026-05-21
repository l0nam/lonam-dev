"use client";
import LatestProject from "@/components/LatestProject";
import ProfileCard from "@/components/ProfileCard";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import Time from "@/components/Time";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-8 flex flex-col justify-center z-10!">
      {/* Центрированная панель кнопок сверху */}
      <div className="flex justify-center pt-6 pb-6 md:pb-8">
        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          {/* Добавляй сюда другие кнопки */}
        </div>
      </div>

      {/* Основной контент */}
      <div className="px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-3 max-w-300 mx-auto">
          {/* Левая колонка */}
          <div className="flex flex-col gap-2 w-full lg:w-auto lg:min-w-95 lg:max-w-105">
            <ProfileCard />
            <Time />
          </div>

          {/* Правая колонка */}
          <div className="w-full lg:flex-1">
            <LatestProject />
          </div>
        </div>
      </div>
    </div>
  );
}
