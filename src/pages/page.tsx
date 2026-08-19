"use client";

import { useState } from "react";
import {
  Bell,
  Award,
  Calendar,
  Upload,
  FileText,
  Info,
  Globe,
  Sun,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function ProfilePage() {
  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    achievements: true,
    nextAppointment: true,
  });
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="px-5 pt-3 pb-4">
      <div className="pt-3 pb-2">
        <h1 className="font-display text-display leading-tight text-txt-primary">
          Meu Perfil
        </h1>
      </div>

      <div className="mt-2 bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center text-white font-display text-2xl">
            A
          </div>
          <div>
            <h2 className="text-lg text-txt-primary font-semibold">
              Ana Silva
            </h2>
            <p className="text-sm text-txt-muted">Paciente desde Jul 2026</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[11px] text-sage-600 bg-sage-50 px-2 py-0.5 rounded-full font-medium">
                Jornada: Semana 4
              </span>
              <span className="text-[11px] text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full font-medium">
                Nível Ouro II
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="font-display text-2xl text-rose-500">12</p>
          <p className="text-xs text-txt-muted mt-0.5">Dias seguidos</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <p className="font-display text-2xl text-sage-600">340</p>
          <p className="text-xs text-txt-muted mt-0.5">Pontos</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold text-txt-muted uppercase tracking-wider mb-3">
          Notificações
        </h3>
        <div className="bg-white rounded-2xl shadow-sm divide-y divide-sage-50">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center">
                <Bell className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <p className="text-sm text-txt-primary font-medium">
                  Lembrete diário
                </p>
                <p className="text-xs text-txt-muted">Todo dia às 19h</p>
              </div>
            </div>
            <input
              type="checkbox"
              className="toggle"
              checked={notifications.dailyReminder}
              onChange={(e) =>
                setNotifications((prev) => ({
                  ...prev,
                  dailyReminder: e.target.checked,
                }))
              }
            />
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gold-50 flex items-center justify-center">
                <Award className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <p className="text-sm text-txt-primary font-medium">
                  Conquistas
                </p>
                <p className="text-xs text-txt-muted">
                  Quando desbloquear algo
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              className="toggle"
              checked={notifications.achievements}
              onChange={(e) =>
                setNotifications((prev) => ({
                  ...prev,
                  achievements: e.target.checked,
                }))
              }
            />
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sage-50 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-sage-500" />
              </div>
              <div>
                <p className="text-sm text-txt-primary font-medium">
                  Próxima consulta
                </p>
                <p className="text-xs text-txt-muted">1 dia antes</p>
              </div>
            </div>
            <input
              type="checkbox"
              className="toggle"
              checked={notifications.nextAppointment}
              onChange={(e) =>
                setNotifications((prev) => ({
                  ...prev,
                  nextAppointment: e.target.checked,
                }))
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold text-txt-muted uppercase tracking-wider mb-3">
          Dados
        </h3>
        <div className="bg-white rounded-2xl shadow-sm divide-y divide-sage-50">
          <button className="flex items-center justify-between p-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-warm-cream flex items-center justify-center">
                <Upload className="w-5 h-5 text-txt-muted" />
              </div>
              <p className="text-sm text-txt-primary font-medium">
                Exportar meus dados
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-txt-light" />
          </button>
          <button className="flex items-center justify-between p-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-warm-cream flex items-center justify-center">
                <FileText className="w-5 h-5 text-txt-muted" />
              </div>
              <p className="text-sm text-txt-primary font-medium">
                Relatório para o médico
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-txt-light" />
          </button>
          <button className="flex items-center justify-between p-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-warm-cream flex items-center justify-center">
                <Info className="w-5 h-5 text-txt-muted" />
              </div>
              <p className="text-sm text-txt-primary font-medium">
                Sobre o tratamento
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-txt-light" />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold text-txt-muted uppercase tracking-wider mb-3">
          Preferências
        </h3>
        <div className="bg-white rounded-2xl shadow-sm divide-y divide-sage-50">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-warm-cream flex items-center justify-center">
                <Globe className="w-5 h-5 text-txt-muted" />
              </div>
              <p className="text-sm text-txt-primary font-medium">Idioma</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-txt-muted">Português</span>
              <ChevronRight className="w-4 h-4 text-txt-light" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-warm-cream flex items-center justify-center">
                <Sun className="w-5 h-5 text-txt-muted" />
              </div>
              <p className="text-sm text-txt-primary font-medium">
                Modo escuro
              </p>
            </div>
            <input
              type="checkbox"
              className="toggle"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          </div>
          <button className="flex items-center justify-between p-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center">
                <LogOut className="w-5 h-5 text-rose-500" />
              </div>
              <p className="text-sm text-rose-500 font-medium">
                Sair da conta
              </p>
            </div>
          </button>
        </div>
      </div>

      <p className="text-center text-xs text-txt-light mt-6 mb-4">
        Felinus v1.0 · Feito com carinho para sua saúde
      </p>
    </div>
  );
}
