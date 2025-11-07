import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold">Готовы привести дела в порядок?</h3>
          <p className="text-neutral-600 mt-1">Начните с одного запроса — остальное Max возьмёт на себя.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-black">
          Открыть чат
          <ArrowRight className="size-4" />
        </button>
      </div>
      <p className="text-[11px] text-neutral-500 text-center mt-3">Проект мини‑приложения для встраивания в Max Messenger. Деликатный и эффективный помощник.</p>
    </section>
  );
}
