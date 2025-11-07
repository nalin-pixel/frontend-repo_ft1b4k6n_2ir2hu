import Header from "./components/Header";
import Hero from "./components/Hero";
import Chat from "./components/Chat";
import FooterCTA from "./components/FooterCTA";

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900 font-sans">
      <Header />
      <main className="space-y-6 md:space-y-8">
        <Hero />
        <Chat />
        <FooterCTA />
      </main>
    </div>
  );
}
