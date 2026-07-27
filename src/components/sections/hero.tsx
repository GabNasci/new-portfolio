// src/components/sections/hero.tsx
'use client';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const techStack = ['React', 'TypeScript', 'Node', 'Uniface', 'SQL', 'Go', 'Figma'];

  return (
    <section id="sobre" className="relative min-h-svh flex items-center pt-20 overflow-hidden">
      <div className="max-w-275 mx-auto px-5 sm:px-8 relative z-10 py-16">
        <span className="block text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-5">
          Abalista de Sistemas & Desenvolvedor Full-Stack
        </span>
        <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
          Gabriel<br />
          <em className="italic text-primary">Nascimento</em>
        </h1>
        <p className="max-w-[44ch] text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
          Desenvolvedor fullstack e instrutor de tecnologia. 
          Atuo no desenvolvimento de sistemas corporativos na Coamo e leciono fundamentos de desenvolvimento web, unindo engenharia de software e ensino.
        </p>

        <div className="flex flex-wrap gap-2 mb-9">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1 rounded-full text-xs font-medium">
              {tech}
            </Badge>
          ))}
        </div>

        <Button asChild size="lg" className="rounded-full px-7">
          <Link href="#projetos">Saber mais</Link>
        </Button>
      </div>

      {/* Círculos Decorativos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-105 lg:w-140 h-105 lg:h-140 rounded-full bg-radial from-primary/15 to-transparent -right-28 lg:-right-20 top-1/2 -translate-y-1/2 opacity-70" />
        <div className="absolute w-44 h-44 rounded-full bg-radial from-primary/10 to-transparent right-48 bottom-15 opacity-70" />
      </div>
    </section>
  );
}