import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, Plus } from "lucide-react";

const suggestions = [
  "Собери мой план на сегодня",
  "Помоги подготовиться к собеседованию",
  "Составь недельное меню для семьи",
  "Разбери почту и наметь ответы",
];

function Message({ role, text }) {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm border ${
          role === "user"
            ? "bg-neutral-900 text-white border-neutral-900"
            : "bg-white text-neutral-900 border-neutral-200"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Привет! Я помогу навести порядок в делах и времени. С чего начнём?",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (value) => {
    const text = value ?? input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    // Simulated assistant reply for UI demo
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text:
            "Понял. Я сформировал список действий и приоритеты. Хотите добавить в задачи или в расписание?",
        },
      ]);
    }, 600);
  };

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="h-[52vh] md:h-[56vh] overflow-y-auto p-3 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="space-y-3">
              {messages.map((m, i) => (
                <Message key={i} role={m.role} text={m.text} />
              ))}
              <div ref={endRef} />
            </div>
          </div>
          <div className="mt-3 flex items-end gap-2">
            <button
              className="px-3 py-2 rounded-xl border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
              aria-label="Возможности"
            >
              <Plus className="size-5" />
            </button>
            <div className="flex-1 flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3">
              <Sparkles className="size-5 text-neutral-500" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send();
                }}
                placeholder="Спросите о задачах, расписании, проектах…"
                className="w-full py-3 outline-none bg-transparent text-sm"
              />
              <button
                onClick={() => send()}
                className="p-2 rounded-lg bg-neutral-900 text-white hover:bg-black active:opacity-90"
                aria-label="Отправить"
              >
                <Send className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => send(s)}
                className="text-left text-xs md:text-sm px-3 py-2 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <SidePanel />
        </div>
      </div>
    </section>
  );
}

function SidePanel() {
  const items = [
    {
      title: "Задачи",
      desc: "Приоритеты на сегодня, быстрые действия",
    },
    { title: "Расписание", desc: "Встречи и фокус‑слоты" },
    { title: "Проекты", desc: "Состояние и следующие шаги" },
    { title: "Личное", desc: "Семья, здоровье, быт" },
  ];
  return (
    <aside className="rounded-2xl border border-neutral-200 bg-white p-4 h-full">
      <h3 className="text-sm font-semibold mb-3">Контекст и действия</h3>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.title} className="group">
            <button className="w-full text-left p-3 rounded-xl bg-neutral-50 border border-neutral-200 group-hover:bg-neutral-100">
              <div className="text-sm font-medium">{it.title}</div>
              <div className="text-xs text-neutral-600">{it.desc}</div>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
