export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc_0%,_#e2e8f0_45%,_#cbd5e1_100%)]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-600">
          SportGere
        </p>

        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-7xl">
          SportGere
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
          A base digital para apoiar a gestão do clube com simplicidade,
          consistência e evolução incremental.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <article className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-base font-semibold text-slate-950">
              Monorepo organizado
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Frontend, backend e testes ficam alinhados numa base simples de
              manter.
            </p>
          </article>

          <article className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-base font-semibold text-slate-950">
              Stack moderna
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Next.js, React, TypeScript, FastAPI e Python 3.13 como fundação.
            </p>
          </article>

          <article className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-base font-semibold text-slate-950">
              Pronto para crescer
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A estrutura inicial já suporta lint, typecheck, testes e CI.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
