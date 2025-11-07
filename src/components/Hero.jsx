import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            Здравствуйте! Я Max, ваш личный помощник.
          </h2>
          <p className="text-neutral-600 mt-3 md:mt-4">
            Помогаю учиться, работать и жить спокойнее: планирую день, ставлю приоритеты, 
            предлагаю шаги и автоматизирую рутину. Всё — деликатно и без лишних уведомлений.
          </p>
        </div>
        <div className="order-1 md:order-2 h-[280px] md:h-[360px] rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200">
          <Spline
            scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/40 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
