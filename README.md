# SportGere

SportGere é a base digital para apoiar a gestão do Almada Atlético Clube.

## Arquitectura de alto nível

- `apps/web`: frontend em Next.js, React, TypeScript e Tailwind CSS.
- `apps/api`: backend em FastAPI com Python 3.13 e `uv`.
- `tests/e2e`: testes end-to-end com Playwright.
- `docs`: documentação de desenvolvimento e operação local.

## Pré-requisitos

- Node.js compatível com Next.js 16.
- pnpm 12.
- Python 3.13.
- uv.

## Instalação local

1. Instalar dependências do frontend com `pnpm install`.
2. Sincronizar o ambiente Python com `cd apps/api && uv sync --group dev`.
3. Copiar `.env.example` para `.env` se precisar de variáveis locais.

## Arranque em desenvolvimento

- Frontend: `pnpm dev:web`
- Backend: `pnpm dev:api`

## Testes

- Lint: `pnpm lint`
- Typecheck: `pnpm typecheck`
- Testes backend: `pnpm test:api`
- Testes E2E: `pnpm test:web`
- Suite completa: `pnpm test`

## Build

- Frontend: `pnpm build`

## Notas

- O conteúdo visível ao utilizador deve estar em PT-PT.
- Os identificadores de código permanecem em inglês.
