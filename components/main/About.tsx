"use client";
import { TextReveal } from "../ui/text-reveal";

export function About() {
  return (
    <section className="py-24 container relative" id="about">
      <TextReveal>
        Я frontend-разработчик и делаю то, что нравится многим, но получается не
        у всех: превращаю идею в сайт, на который хочется вернуться. Без
        шаблонов, без «и так сойдёт» — каждый пиксель на своём месте.
      </TextReveal>

      <TextReveal>
        Работаю на Next.js, Tailwind CSS и Framer Motion , поэтому ваш сайт не
        просто красиво выглядит — он быстро загружается, корректно открывается
        на телефоне и легко находится в поиске. Я слежу за тем самым финальным
        слоем полировки, из-за которого интерфейс ощущается живым, а не
        собранным на конструкторе за вечер.
      </TextReveal>
    </section>
  );
}
