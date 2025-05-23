
# 💼 Hackathon W1 Consultoria – Frontend

Este é o repositório do frontend do projeto desenvolvido durante o Hackathon da W1 Consultoria 2025. O objetivo é construir uma solução digital moderna e interativa com foco em gestão patrimonial, utilizando tecnologias atuais de frontend e integração com inteligência artificial.

## 📑 Índice

- [💼 Sobre o Projeto](#-hackathon-w1-consultoria--frontend)
- [🚀 Tecnologias e Ferramentas](#-tecnologias-e-ferramentas)
- [🧱 Estrutura do Projeto](#-estrutura-do-projeto)
- [📦 Como rodar o projeto localmente](#-como-rodar-o-projeto-localmente)
- [🧩 Comandos úteis](#-comandos-úteis)
- [🤝 Colaboração](#-colaboração)


## 🚀 Tecnologias e Ferramentas

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.dev/) (componentes acessíveis e personalizáveis)
- [lucide-react](https://lucide.dev/) (ícones)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)

## 🧱 Estrutura do Projeto

```
📦 src
├── assets/             # Arquivos estáticos (imagens, logos, etc)
├── components/         # Componentes reutilizáveis
│   └── ui/             # Componentes da lib shadcn
├── features/           # Funcionalidades isoladas (Ex: dashboard, árvore patrimonial, etc)
├── pages/              # Páginas principais do app
├── lib/                # Funções auxiliares (utils, formatadores, chamadas à API)
├── config/             # Arquivos de configuração (temas, constantes globais)
├── index.css           # Importação do Tailwind
├── App.tsx             # Componente raiz da aplicação
└── main.tsx            # Entrada principal (ponto de montagem)
```

## 📦 Como rodar o projeto localmente

Pré-requisitos: pnpm instalado globalmente

```bash
# Clone o repositório
git clone https://github.com/sua-org/w1-frontend.git
cd w1-frontend

# Instale as dependências
pnpm install

# Rode o projeto em ambiente de desenvolvimento
pnpm dev
```

A aplicação ficará disponível em http://localhost:5173

## 🧩 Comandos úteis

```bash
# Inicializar componentes da shadcn
pnpm dlx shadcn@latest init

# Adicionar um componente
pnpm dlx shadcn@latest add button
```

## 🤝 Colaboração

Sinta-se à vontade para abrir issues ou PRs com sugestões de melhorias. Este projeto faz parte de uma solução integrada com backend em Python e banco de dados PostgreSQL.

---

Feito com 💜 para a W1 Consultoria por [Equipe Hackathon W1]