# SportGere Copilot Instructions

## Project

SportGere is an open-source sports club management platform for Almada Atlético Clube.

Application language:
- PT-PT for UI and documentation.
- English for code identifiers.

## Stack

Frontend:
- Next.js
- React
- TypeScript
- Tailwind CSS

Backend:
- Python
- FastAPI
- Pydantic

Database:
- PostgreSQL
- Supabase

Testing:
- Pytest
- Playwright

## General rules

- Follow Clean Code.
- Prefer simple and maintainable solutions.
- Keep modules small and focused.
- Avoid unnecessary abstractions.
- Avoid duplicated code.
- Do not introduce dependencies without justification.
- Do not modify unrelated files.

## TypeScript

- Use strict TypeScript.
- Avoid any.
- Prefer explicit types.
- Use async/await.
- Follow ESLint and Prettier.

## Python

- Follow PEP 8.
- Use type hints.
- Use Ruff.
- Use Mypy.
- Prefer explicit and readable code.

## API

- REST.
- JSON.
- FastAPI.
- Pydantic validation.
- Correct HTTP status codes.
- OpenAPI documentation.

## Security

- Never expose secrets.
- Never commit .env files.
- Never expose service-role credentials to the browser.
- Validate external input.
- Authorization must be enforced server-side.

## Testing

Every significant feature must include tests.

Backend:
- Pytest

Frontend:
- Playwright

Tests should cover:
- happy path
- validation
- authorization
- important edge cases

## Development workflow

For complex tasks:

1. Inspect the repository.
2. Explain the current implementation.
3. Produce an implementation plan.
4. Identify affected files.
5. Implement incrementally.
6. Add/update tests.
7. Run lint and type checks.
8. Run relevant tests.
9. Summarize changes.