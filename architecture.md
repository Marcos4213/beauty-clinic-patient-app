# Arquitetura — Beauty Clinic SaaS Platform

## Visão Geral

A **Beauty Clinic** é uma plataforma SaaS completa para tricologistas, construída para resolver os principais problemas do setor: caos de agenda, registros desorganizados, ausência de acompanhamento de evolução, e falta de dados para tomada de decisão.

A plataforma integra: **Prontuário Digital**, **Agendamento Online**, **Controle Financeiro**, **Programa de Indicação**, e **Dashboard Analítico** — tudo em uma única interface moderna, rápida e segura.

---

## Stack Tecnológica

| Camada | Tecnologia | Justificativa |
|--------|------------|---------------|
| **Frontend** | Next.js 14+ App Router | Server Components, RSC, Server Actions, performance nativa |
| **UI Library** | React 18+ | Ecossistema maduro, server components |
| **Estilização** | Tailwind CSS | Utility-first, customização via design tokens |
| **Componentes** | shadcn/ui | Componentes acessíveis (WCAG AA), customizáveis, sem bundle overhead |
| **Animações** | GSAP | Micro-interações performáticas, scroll triggers |
| **Backend** | Supabase | PostgreSQL + Auth + Storage + Realtime integrados |
| **Banco** | PostgreSQL (via Supabase) | ACID, RLS nativo, JSON support |
| **Autenticação** | Supabase Auth | Magic link + senha, social login, MFA |
| **Storage** | Supabase Storage | Fotos com políticas de acesso por clínica |
| **Integrações** | WhatsApp Business API | Lembretes, confirmações, follow-up |
| **Calendário** | Google Calendar API | Sincronização bidirecional |
| **Deploy** | Vercel | Otimizado para Next.js, edge functions |
| **Linguagem** | TypeScript | Type safety desde o início |

---

## Estrutura de Pastas

```
beauty-clinic/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx              # Sidebar + Header + Main
│   │   ├── page.tsx                # Home / Dashboard Principal
│   │   ├── patients/
│   │   │   ├── page.tsx            # Lista de pacientes
│   │   │   ├── [id]/
│   │   │   │   ├── page.tsx        # Prontuário do paciente
│   │   │   │   ├── edit/page.tsx   # Editar paciente
│   │   │   │   └── photos/page.tsx # Galeria de fotos
│   │   │   └── new/page.tsx        # Novo paciente
│   │   ├── schedule/
│   │   │   ├── page.tsx            # Calendário principal
│   │   │   └── [id]/page.tsx       # Detalhe do agendamento
│   │   ├── treatments/
│   │   │   ├── page.tsx            # Lista de tratamentos
│   │   │   └── [id]/page.tsx       # Detalhe do tratamento
│   │   ├── financial/
│   │   │   ├── page.tsx            # Dashboard financeiro
│   │   │   ├── packages/page.tsx   # Gerenciar pacotes
│   │   │   └── reports/page.tsx    # Relatórios
│   │   ├── referrals/
│   │   │   ├── page.tsx            # Programa de indicação
│   │   │   └── leaderboard/page.tsx # Ranking
│   │   └── settings/
│   │       ├── page.tsx            # Configurações gerais
│   │       └── clinic/page.tsx     # Dados da clínica
│   ├── api/
│   │   ├── webhooks/
│   │   │   ├── whatsapp/route.ts
│   │   │   └── calendar/route.ts
│   │   ├── upload/route.ts
│   │   └── reports/
│   │       └── generate/route.ts
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Redirect to /login or /dashboard
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── dashboard/
│   │   ├── metric-card.tsx
│   │   ├── sidebar.tsx
│   │   └── header.tsx
│   ├── patients/
│   │   ├── patient-form.tsx
│   │   ├── anamnesis-form.tsx
│   │   ├── photo-upload.tsx
│   │   └── timeline.tsx
│   ├── schedule/
│   │   ├── calendar-view.tsx
│   │   ├── appointment-modal.tsx
│   │   └── booking-flow.tsx
│   ├── financial/
│   │   ├── revenue-chart.tsx
│   │   └── package-card.tsx
│   ├── referrals/
│   │   ├── referral-card.tsx
│   │   └── leaderboard.tsx
│   └── shared/
│       ├── data-table.tsx
│       ├── loading-skeleton.tsx
│       └── empty-state.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts               # Browser client
│   │   ├── server.ts               # Server client
│   │   └── middleware.ts           # Auth middleware
│   ├── types/
│   │   ├── database.ts             # Generated types
│   │   └── index.ts                # Custom types
│   ├── utils/
│   │   ├── date.ts
│   │   ├── currency.ts
│   │   └── validators.ts
│   └── constants/
│       └── index.ts
├── actions/
│   ├── patients.ts                 # Server actions - pacientes
│   ├── appointments.ts             # Server actions - agendamentos
│   ├── treatments.ts               # Server actions - tratamentos
│   ├── photos.ts                   # Server actions - fotos
│   ├── packages.ts                 # Server actions - pacotes
│   ├── referrals.ts                # Server actions - indicações
│   ├── financial.ts                # Server actions - financeiro
│   └── auth.ts                     # Server actions - autenticação
├── public/
│   ├── images/
│   └── icons/
├── supabase/
│   └── migrations/
│       ├── 001_initial_schema.sql
│       ├── 002_rls_policies.sql
│       └── 003_indexes.sql
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── .env.local
```

---

## Schema do Banco de Dados

### Entity Relationship Diagram (Texto)

```
clinics 1──N patients
clinics 1──N professionals
patients 1──N appointments
professionals 1──N appointments
patients 1──N treatments
patients 1──N photo_sessions
patients 1──N referrals
patients 1──N loyalty_points
appointments 1──N payments
treatments 1──N treatment_sessions
packages 1──N package_items
packages 1──N patients (via patient_packages)
```

### Tabelas

#### clinics
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | ID da clínica |
| name | TEXT | NOT NULL | Nome da clínica |
| cnpj | TEXT | UNIQUE | CNPJ (opcional) |
| phone | TEXT | | Telefone principal |
| email | TEXT | | E-mail de contato |
| address | TEXT | | Endereço completo |
| logo_url | TEXT | | URL do logo |
| working_hours | JSONB | DEFAULT '{"mon":{"start":"09:00","end":"18:00"},...}' | Horário de funcionamento |
| settings | JSONB | DEFAULT '{}' | Configurações gerais |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Data de criação |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | Última atualização |

#### patients
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | ID do paciente |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| name | TEXT | NOT NULL | Nome completo |
| cpf | TEXT | UNIQUE | CPF |
| birth_date | DATE | | Data de nascimento |
| phone | TEXT | | Telefone/WhatsApp |
| email | TEXT | | E-mail |
| gender | TEXT | | Gênero |
| profession | TEXT | | Profissão |
| photo_url | TEXT | | Foto de perfil |
| notes | TEXT | | Observações gerais |
| status | TEXT | DEFAULT 'active', CHECK (status IN ('active','inactive','archived')) | Status |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Data de criação |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | Última atualização |

#### anamnesis
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| patient_id | UUID | NOT NULL, FK → patients.id | Paciente |
| chief_complaint | TEXT | | Queixa principal |
| hair_loss_type | TEXT | | Tipo de queda (androgenetica, difusa, areata, telogen) |
| family_history | TEXT | | Histórico familiar |
| medical_history | TEXT | | Histórico médico |
| current_medications | TEXT | | Medicações em uso |
| allergies | TEXT | | Alergias |
| previous_treatments | TEXT | | Tratamentos anteriores |
| hygiene_routine | TEXT | | Rotina de higiene |
| diet_supplements | TEXT | | Alimentação e suplementação |
| stress_level | INTEGER | CHECK (stress_level BETWEEN 1 AND 10) | Nível de estresse |
| scalp_condition | TEXT | | Condição do couro cabeludo |
| hair_density | TEXT | | Densidade estimada |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### professionals
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| name | TEXT | NOT NULL | Nome |
| role | TEXT | NOT NULL | Função (trichologist, assistant, receptionist) |
| email | TEXT | UNIQUE | E-mail |
| phone | TEXT | | Telefone |
| avatar_url | TEXT | | Foto |
| working_hours | JSONB | | Horários específicos |
| color | TEXT | | Cor para identificação no calendário |
| active | BOOLEAN | DEFAULT true | Ativo |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### appointments
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| patient_id | UUID | NOT NULL, FK → patients.id | Paciente |
| professional_id | UUID | NOT NULL, FK → professionals.id | Profissional |
| service_type | TEXT | NOT NULL | Tipo (evaluation, session, follow_up, return) |
| start_time | TIMESTAMPTZ | NOT NULL | Data/hora início |
| end_time | TIMESTAMPTZ | NOT NULL | Data/hora fim |
| status | TEXT | DEFAULT 'scheduled', CHECK (status IN ('scheduled','confirmed','completed','cancelled','no_show')) | Status |
| notes | TEXT | | Observações |
| reminder_sent | BOOLEAN | DEFAULT false | Lembrete enviado |
| confirmed_at | TIMESTAMPTZ | | Hora da confirmação |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### treatments
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| patient_id | UUID | NOT NULL, FK → patients.id | Paciente |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| diagnosis | TEXT | NOT NULL | Diagnóstico |
| treatment_type | TEXT | NOT NULL | Tipo de tratamento |
| protocol | JSONB | | Protocolo detalhado |
| start_date | DATE | NOT NULL | Data de início |
| expected_end_date | DATE | | Data prevista de término |
| actual_end_date | DATE | | Data real de término |
| status | TEXT | DEFAULT 'active', CHECK (status IN ('active','completed','paused','cancelled')) | Status |
| sessions_total | INTEGER | | Total de sessões previstas |
| sessions_completed | INTEGER | DEFAULT 0 | Sessões realizadas |
| notes | TEXT | | Observações clínicas |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### treatment_sessions
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| treatment_id | UUID | NOT NULL, FK → treatments.id | Tratamento |
| appointment_id | UUID | FK → appointments.id | Agendamento associado |
| session_number | INTEGER | NOT NULL | Número da sessão |
| date | DATE | NOT NULL | Data da sessão |
| procedures | JSONB | | Procedimentos realizados |
| products_used | JSONB | | Produtos utilizados |
| observations | TEXT | | Observações da sessão |
| next_session_date | DATE | | Data da próxima sessão |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### photo_sessions
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| patient_id | UUID | NOT NULL, FK → patients.id | Paciente |
| treatment_id | UUID | FK → treatments.id | Tratamento associado |
| session_date | DATE | NOT NULL | Data da sessão fotográfica |
| photos | JSONB | NOT NULL | Array de fotos [{url, angle, area}] |
| notes | TEXT | | Observações |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

** photos JSONB structure:**
```json
[
  {
    "url": "string",
    "angle": "frontal | frontal_45 | vertex | lateral_right | lateral_left | occipital | closeup",
    "area": "string (target area label)",
    "lighting": "reflected | polarized",
    "annotations": "string (optional)"
  }
]
```

#### packages
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| name | TEXT | NOT NULL | Nome do pacote |
| description | TEXT | | Descrição |
| sessions | INTEGER | NOT NULL | Número de sessões |
| price | DECIMAL(10,2) | NOT NULL | Valor total |
| validity_days | INTEGER | DEFAULT 90 | Validade em dias |
| active | BOOLEAN | DEFAULT true | Ativo |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### patient_packages
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| patient_id | UUID | NOT NULL, FK → patients.id | Paciente |
| package_id | UUID | NOT NULL, FK → packages.id | Pacote |
| sessions_total | INTEGER | NOT NULL | Sessões do pacote |
| sessions_used | INTEGER | DEFAULT 0 | Sessões utilizadas |
| purchase_date | DATE | NOT NULL | Data de compra |
| expiry_date | DATE | NOT NULL | Data de validade |
| status | TEXT | DEFAULT 'active', CHECK (status IN ('active','expired','completed')) | Status |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### payments
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| patient_id | UUID | NOT NULL, FK → patients.id | Paciente |
| appointment_id | UUID | FK → appointments.id | Agendamento |
| patient_package_id | UUID | FK → patient_packages.id | Pacote utilizado |
| amount | DECIMAL(10,2) | NOT NULL | Valor |
| payment_method | TEXT | | Forma de pagamento |
| status | TEXT | DEFAULT 'pending', CHECK (status IN ('pending','paid','cancelled','refunded')) | Status |
| paid_at | TIMESTAMPTZ | | Data do pagamento |
| notes | TEXT | | Observações |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### referrals
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| referrer_patient_id | UUID | NOT NULL, FK → patients.id | Quem indicou |
| referred_patient_id | UUID | FK → patients.id | Quem foi indicado |
| referral_code | TEXT | NOT NULL | Código de indicação |
| status | TEXT | DEFAULT 'pending', CHECK (status IN ('pending','converted','expired')) | Status |
| reward_given | BOOLEAN | DEFAULT false | Recompensa entregue |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### loyalty_points
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| patient_id | UUID | NOT NULL, FK → patients.id | Paciente |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| points | INTEGER | NOT NULL | Pontos |
| source | TEXT | NOT NULL | Origem (session, referral, purchase, bonus) |
| reference_id | UUID | | ID da referência |
| expires_at | TIMESTAMPTZ | | Data de expiração |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | |

#### consents
| Coluna | Tipo | Constraints | Descrição |
|--------|------|-------------|-----------|
| id | UUID | PRIMARY KEY | ID |
| patient_id | UUID | NOT NULL, FK → patients.id | Paciente |
| clinic_id | UUID | NOT NULL, FK → clinics.id | Clínica |
| consent_type | TEXT | NOT NULL | Tipo (treatment, photo, data_sharing) |
| granted | BOOLEAN | NOT NULL | Concedido |
| signed_at | TIMESTAMPTZ | DEFAULT NOW() | Data da assinatura |
| ip_address | TEXT | | IP do paciente |

---

## RLS Policies

Todas as tabelas terão RLS habilitado com policies baseadas em `clinic_id`:

```sql
-- Exemplo: patients
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view patients in their clinic"
  ON patients FOR SELECT
  USING (clinic_id = auth.uid() ->> 'clinic_id');

CREATE POLICY "Users can insert patients in their clinic"
  ON patients FOR INSERT
  WITH CHECK (clinic_id = auth.uid() ->> 'clinic_id');

CREATE POLICY "Users can update patients in their clinic"
  ON patients FOR UPDATE
  USING (clinic_id = auth.uid() ->> 'clinic_id');

CREATE POLICY "Users can delete patients in their clinic"
  ON patients FOR DELETE
  USING (clinic_id = auth.uid() ->> 'clinic_id');
```

**Pattern for all tables:**
1. `ENABLE ROW LEVEL SECURITY`
2. SELECT policy: `clinic_id = auth.uid() ->> 'clinic_id'`
3. INSERT policy: `clinic_id = auth.uid() ->> 'clinic_id'`
4. UPDATE policy: `clinic_id = auth.uid() ->> 'clinic_id'`
5. DELETE policy: `clinic_id = auth.uid() ->> 'clinic_id'`

**Special cases:**
- `consents`: Patients can view their own consents
- `referrals`: Referrers can view their own referrals
- `payments`: Patients can view their own payments

---

## Server Actions

### patients.ts
```typescript
"use server"
// createPatient(input: CreatePatientInput) → Patient
// updatePatient(id: string, input: UpdatePatientInput) → Patient
// deletePatient(id: string) → void (soft delete)
// getPatient(id: string) → PatientWithRelations
// listPatients(filters: PatientFilters) → Patient[]
```

### appointments.ts
```typescript
"use server"
// createAppointment(input: CreateAppointmentInput) → Appointment
// updateAppointment(id: string, input: UpdateAppointmentInput) → Appointment
// cancelAppointment(id: string) → Appointment
// confirmAppointment(id: string) → Appointment
// markNoShow(id: string) → Appointment
// listAppointments(dateRange: DateRange) → Appointment[]
// getAvailableSlots(professionalId: string, date: string) → Slot[]
```

### treatments.ts
```typescript
"use server"
// createTreatment(input: CreateTreatmentInput) → Treatment
// updateTreatment(id: string, input: UpdateTreatmentInput) → Treatment
// completeTreatment(id: string) → Treatment
// addSession(treatmentId: string, input: SessionInput) → TreatmentSession
// getTreatmentHistory(patientId: string) → Treatment[]
```

### photos.ts
```typescript
"use server"
// uploadPhoto(patientId: string, file: File, metadata: PhotoMetadata) → Photo
// createPhotoSession(patientId: string, photos: PhotoInput[]) → PhotoSession
// getPhotoTimeline(patientId: string) → PhotoSession[]
// comparePhotos(photoIds: string[]) → PhotoComparison
```

### packages.ts
```typescript
"use server"
// createPackage(input: CreatePackageInput) → Package
// updatePackage(id: string, input: UpdatePackageInput) → Package
// purchasePackage(patientId: string, packageId: string) → PatientPackage
// useSession(patientPackageId: string) → PatientPackage
```

### referrals.ts
```typescript
"use server"
// generateReferralCode(patientId: string) → string
// createReferral(referralCode: string, referredPatientId: string) → Referral
// getReferralStats(clinicId: string) → ReferralStats
// getLeaderboard(clinicId: string) → LeaderboardEntry[]
```

### financial.ts
```typescript
"use server"
// recordPayment(input: PaymentInput) → Payment
// getRevenueSummary(dateRange: DateRange) → RevenueSummary
// getPatientFinancials(patientId: string) → PatientFinancials
// generateReport(type: ReportType, dateRange: DateRange) → Report
```

### auth.ts
```typescript
"use server"
// signIn(email: string, password: string) → Session
// signOut() → void
// getSession() → Session | null
// resetPassword(email: string) → void
```

---

## Plano de Implementação

### Fase 1: Fundação (Semana 1)
- [ ] Configurar projeto Next.js 14+ com App Router
- [ ] Instalar e configurar shadcn/ui + Tailwind
- [ ] Criar schema do banco no Supabase
- [ ] Configurar Supabase Auth
- [ ] Criar layout base (sidebar + header)
- [ ] Configurar middleware de autenticação
- [ ] Criar types TypeScript do banco

### Fase 2: Core (Semanas 2-3)
- [ ] Cadastro de pacientes (CRUD completo)
- [ ] Prontuário digital com anamnese
- [ ] Sistema de agendamento com calendário
- [ ] Upload e organização de fotos
- [ ] Timeline de evolução do paciente

### Fase 3: Financeiro (Semana 4)
- [ ] Dashboard financeiro com métricas
- [ ] Gestão de pacotes
- [ ] Controle de pagamentos
- [ ] Relatórios básicos

### Fase 4: Engajamento (Semana 5)
- [ ] Programa de indicação gamificado
- [ ] Sistema de pontos e níveis
- [ ] Leaderboard de indicações
- [ ] Integração WhatsApp para lembretes

### Fase 5: Polimento (Semana 6)
- [ ] Micro-animações com GSAP
- [ ] Otimização de performance
- [ ] Exportação de relatórios em PDF
- [ ] Testes e ajustes finais
- [ ] Deploy na Vercel

---

## Decisões Técnicas

### 1. Por que Supabase e não Firebase?
**Contexto:** Precisávamos de um backend para o SaaS.
**Opções:** Supabase, Firebase, Build自己的 com Prisma
**Escolha:** Supabase
**Rationale:** PostgreSQL nativo (não NoSQL forçado), RLS para dados de saúde, Storage para fotos, Auth integrado, pricing previsível, open source.

### 2. Por que shadcn/ui e não Material UI?
**Contexto:** Precisávamos de uma biblioteca de componentes.
**Opções:** shadcn/ui, Material UI, Chakra UI, Radix UI
**Escolha:** shadcn/ui
**Rationale:** Zero bundle overhead (componentes copiados), Tailwind nativo, totalmente customizável, acessível (WCAG AA), sem dependência de biblioteca externa.

### 3. Por que Server Actions e não API Routes?
**Contexto:** Form handling e mutations.
**Opções:** API Routes tradicionais, Server Actions
**Escolha:** Server Actions
**Rationale:** Menos boilerplate, type safety nativo, progress enhancement automático, padrão Next.js 14+.

### 4. Por que Dark Mode como opção?
**Contexto:** Profissionais de saúde trabalham longas horas.
**Opções:** Só light, Só dark, Ambos
**Escolha:** Ambos com dark como default
**Rationale:** Reduz fadiga visual, profissionais de saúde preferem ambientes menos ofuscantes, tendência de SaaS healthcare 2025-2026.

### 5. Por que Soft Delete para dados de saúde?
**Contexto:** Dados de pacientes nunca devem ser perdidos.
**Opções:** Hard delete, Soft delete, Arquivamento
**Escolha:** Soft delete
**Rationale:** LGPD exige preservação de registros, auditorias médicas, histórico clínico completo, reversível.

---

## Métricas de Performance

| Métrica | Meta | Como medir |
|---------|------|------------|
| LCP | < 2.0s | Core Web Vitals |
| FID | < 100ms | Core Web Vitals |
| CLS | < 0.1 | Core Web Vitals |
| TTFB | < 600ms | Time to First Byte |
| Bundle Size | < 200KB (initial) | Next.js build output |
| DB Query Time | < 100ms (p95) | Supabase dashboard |

---

## Segurança e LGPD

1. **Dados de saúde** são dados sensíveis (LGPD Art. 5, II)
2. **RLS obrigatório** em todas as tabelas
3. **Criptografia em repouso** (Supabase Storage)
4. **Consentimento digital** antes de qualquer tratamento
5. **Direito ao esquecimento** — soft delete + anonimização
6. **Audit log** — trilha de acesso a dados sensíveis
7. **Backup automático** — Supabase point-in-time recovery
