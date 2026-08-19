# Beauty Clinic — App do Paciente 📱

Plataforma gamificada de acompanhamento de tratamento capilar para pacientes de tricologia.

## 🎯 O que é

Um app web mobile-first que os pacientes acessam entre as sessões de tratamento (a cada 15 dias) para:
- Fazer check-in diário com foto de progresso
- Acompanhar streak e conquistas
- Visualizar compliance e tendência
- Receber lembretes de tratamento

## 📁 Estrutura do Projeto

```
beauty-clinic/
├── README.md                    # Este arquivo
├── architecture.md              # Arquitetura do sistema (13 tabelas, RLS, etc.)
├── design-system-mobile.md      # Design tokens, paleta, tipografia
├── mockups-patient-app.md       # Documentação dos mockups
├── review-report.md             # Review de qualidade da Renata
├── package.json                 # Dependências Next.js
├── tailwind.config.ts           # Configuração Tailwind com design tokens
├── next.config.js               # Configuração Next.js (static export)
├── tsconfig.json                # Configuração TypeScript
└── src/
    ├── gamification.ts          # Lógica de streak, pontos, badges
    ├── types.ts                 # Types TypeScript
    ├── utils.ts                 # Utilitários
    ├── components/              # Componentes React
    │   ├── streak-banner.tsx    # Banner de streak com dots
    │   ├── daily-task.tsx       # Card de tarefa do dia
    │   ├── progress-ring.tsx    # Anel de progresso circular
    │   ├── badge-card.tsx       # Card de conquista
    │   ├── bottom-nav.tsx       # Navegação inferior
    │   └── journey-chapter.tsx  # Capítulo da jornada
    └── pages/                   # Páginas HTML (mockups)
        ├── 01-home.html         # Tela inicial
        ├── 02-checkin.html      # Check-in diário
        ├── 03-progresso.html    # Progresso e fotos
        ├── 04-conquistas.html   # Badges e streak
        ├── 05-jornada.html      # Narrativa em capítulos
        ├── 06-perfil.html       # Perfil e config
        └── preview-patient-app.html  # Preview combinado
```

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| Background | `#FFF8F5` | Fundo quente (diário) |
| Rose | `#F43F5E` | CTAs, streak, urgência |
| Sage | `#4A7C4A` | Saúde, conclusão, compliance |
| Gold | `#D97706` | Recompensas, pontos |
| Text Primary | `#2D2A26` | Títulos |
| Text Body | `#5C5650` | Corpo |

**Fontes:** DM Serif Display (títulos) + DM Sans (corpo)

## 🚀 Como Rodar

```bash
cd beauty-clinic
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## 📱 Deploy (GitHub Pages)

```bash
npm run build
# Arquivos estáticos gerados em out/
```

O app está publicado em:
**https://marcos4213.github.io/beauty-clinic-patient-app/**

## 🎮 Gamificação

| Ação | Pontos |
|------|--------|
| Check-in diário | +10 |
| Foto de progresso | +15 |
| Streak 7 dias | +50 |
| Streak 30 dias | +200 |
| Completar capítulo | +100 |

**Badges:** Bronze → Prata → Ouro → Diamante

**Streak com perdão:** 1 dia de folga por semana (não perde o streak completo)

## 📋 Próximos Passos

- [ ] Conectar com Supabase (auth + banco)
- [ ] Adicionar upload de fotos reais
- [ ] Portal mínimo para a tricologista
- [ ] Notificações push
- [ ] Deploy automático via Vercel
