import { Settings, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center text-white font-semibold">
            M
          </div>
          <div>
            <h1 className="text-base font-semibold leading-tight">Max Assist</h1>
            <p className="text-xs text-neutral-500 -mt-0.5">Ваш личный ИИ‑помощник</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-neutral-600">
          <button aria-label="Профиль" className="p-2 rounded-lg hover:bg-neutral-100 active:bg-neutral-200">
            <User className="size-5" />
          </button>
          <button aria-label="Настройки" className="p-2 rounded-lg hover:bg-neutral-100 active:bg-neutral-200">
            <Settings className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
