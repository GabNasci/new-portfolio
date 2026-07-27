// src/components/sections/about.tsx
export function AboutSection() {
  const stats = [
    { number: '+2', label: 'Anos de experiência' },
    { number: '2', label: 'Atuações em docência' },
    { number: '10+', label: 'Tecnologias no stack' },
  ];

  return (
    <section className="bg-card border-y border-border py-20 lg:py-28">
      <div className="max-w-275 mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span className="inline-block text-xs font-medium tracking-[0.12em] uppercase text-primary mb-3">
            Sobre mim
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Do backend ao frontend,<br />sempre construindo
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sou formado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Integrado, onde também atuei como monitor e professor no Programa de Aceleração de Carreiras, além de lecionar no Itinerário de Tecnologias Digitais do ensino médio.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Atualmente, sou Analista de Sistemas na Coamo, atuando no desenvolvimento e na manutenção do ERP da cooperativa, com foco em sistemas para administração e gestão de pessoas. Em paralelo, continuo compartilhando conhecimento lecionando HTML e CSS nos bootcamps da Betech Integrado (Bootcamp4all).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Sou apaixonado por entender cada camada de uma aplicação e criar soluções completas — unindo banco de dados, regras de negócio e interfaces intuitivas.
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <li key={idx} className="flex flex-col gap-1">
              <span className="font-serif font-light text-4xl sm:text-5xl text-primary leading-none">
                {stat.number}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}