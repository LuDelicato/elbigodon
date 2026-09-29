import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Scissors,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      name: "Corte Tradicional",
      price: "15.00€",
      duration: "30 min",
      desc: "Corte à tesoura ou máquina com acabamento impecável na lâmina.",
    },
    {
      id: 2,
      name: "Barba Terapia",
      price: "12.00€",
      duration: "30 min",
      desc: "Toalha quente, hidratação profunda e alinhamento preciso dos contornos.",
    },
    {
      id: 3,
      name: "Combo Cabelo + Barba",
      price: "25.00€",
      duration: "50 min",
      desc: "O pacote completo para renovar o visual e relaxar com tratamento térmico.",
    },
    {
      id: 4,
      name: "Corte Degradê / Fade",
      price: "17.00€",
      duration: "40 min",
      desc: "Transição suave na máquina com raspagem zero e contornos navalhados.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* --header-- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black font-bold">
              <Scissors className="w-4 h-4" />
            </div>
            <span className="font-extrabold tracking-wider text-lg uppercase text-white">
              El Bigodon
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a
              href="#services"
              className="hover:text-amber-400 transition-colors"
            >
              Serviços
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              A Barbearia
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors"
            >
              Contacto
            </a>
            <a
              href="/admin"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Admin
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-md active:scale-95">
              Marcar Horário
            </button>
          </div>

          <button
            className="md:hidden p-2 text-neutral-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-800 bg-neutral-900 px-4 py-4 space-y-3">
            <a
              href="#services"
              className="block text-sm font-medium text-neutral-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#about"
              className="block text-sm font-medium text-neutral-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              A Barbearia
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium text-neutral-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <a
              href="/admin"
              className="block text-sm font-medium text-neutral-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Área Barbeiro
            </a>
            <button className="w-full bg-amber-500 text-neutral-950 font-semibold py-2 rounded-lg text-sm mt-2">
              Marcar Horário
            </button>
          </div>
        )}
      </header>

      {/* --hero-- */}
      <main className="flex-1">
        <section className="relative px-4 sm:px-6 pt-16 pb-20 max-w-6xl mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5" /> Marcações Online em
                Tempo Real
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Estilo, Tradição e Navalha Afiada.
              </h1>
              <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
                Experiência de barbearia autêntica no El Bigodon. Escolha o
                serviço, selecione a hora e reserve em segundos sem
                complicações.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-6 py-3.5 rounded-xl text-base transition-all shadow-lg active:scale-95">
                  Agendar Sessão
                </button>
                <a
                  href="https://www.instagram.com/elbigodon_barbearia10/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-semibold px-5 py-3.5 rounded-xl text-base transition-all"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Ver Instagram</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div>
                    <h3 className="font-bold text-white text-base">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-xs text-neutral-400">Terça a Sábado</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <div className="space-y-2 text-sm text-neutral-300">
                  <div className="flex justify-between py-1">
                    <span>Terça - Sexta</span>
                    <span className="font-semibold text-neutral-100">
                      09:30 - 19:30
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Sábado</span>
                    <span className="font-semibold text-neutral-100">
                      09:00 - 19:00
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-neutral-500">
                    <span>Domingo e Segunda</span>
                    <span>Encerrado</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Espaço acolhedor e climatizado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --services-- */}
        <section
          id="services"
          className="bg-neutral-900/40 border-y border-neutral-800/80 py-16 px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                Tabela de Serviços
              </h2>
              <p className="text-neutral-400 text-sm max-w-md mx-auto">
                Valores atualizados dinamicamente pelo painel da barbearia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-5 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-white text-base leading-snug">
                        {item.name}
                      </h4>
                      <span className="font-black text-amber-400 text-lg">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />{" "}
                      {item.duration}
                    </span>
                    <button className="text-amber-400 hover:text-amber-300 font-semibold">
                      Agendar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* --footer-- */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-8 px-4 sm:px-6 text-xs text-neutral-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} El Bigodon Barbearia. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-600">
              Sistema Independente de Agendamentos
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
