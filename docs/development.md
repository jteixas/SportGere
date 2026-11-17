# Desenvolvimento local

Este documento descreve o fluxo local da foundation do SportGere.

## Pré-requisitos

- Node.js compatível com Next.js 16.
- pnpm 12.
- Python 3.13.
- uv.

## Primeira execução

1. Instalar as dependências do repositório com `pnpm install`.
2. Preparar o ambiente Python do backend com `cd apps/api && uv sync --group dev`.
3. Copiar `.env.example` para `.env` se for necessário ajustar portas ou URLs locais.

## Arranque local

Abrir dois terminais.

Terminal 1:

```bash
pnpm dev:api
```

Terminal 2:

```bash
pnpm dev:web
```

O backend fica disponível em `http://127.0.0.1:8000` e o frontend em `http://127.0.0.1:3000`.

## Verificações

### Backend

```bash
pnpm lint:api
pnpm typecheck:api
pnpm test:api
```

### Frontend

```bash
pnpm lint:web
pnpm typecheck:web
pnpm build:web
```

### End-to-end

```bash
pnpm test:web
```

## Health check

O endpoint de saúde do backend deve responder:

```json
{ "status": "ok" }
```

## Convenções

- Texto visível ao utilizador e documentação em PT-PT.
- Identificadores de código em inglês.
- Não adicionar camadas vazias para funcionalidades futuras.
