// src/components/sections/projects.tsx
import Link from 'next/link';
import { ArrowRight, Server, Layers, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  bgClass: string;
  icon: typeof Server;
  highlight?: string;
}

const projects: Project[] = [
  {
    slug: 'order-engine-ddd',
    title: 'Order Engine (DDD)',
    category: 'Microsserviço Core',
    description: 'Sistema de processamento de pedidos aplicando Domain-Driven Design (DDD), arquitetura limpa, testes automatizados e persistência em PostgreSQL.',
    tags: ['Go (Golang)', 'DDD', 'PostgreSQL', 'Docker'],
    bgClass: 'bg-[#C5D0F5]',
    icon: Layers,
    highlight: 'Arquitetura Limpa & DDD',
  },
  {
    slug: 'event-notification-service',
    title: 'Notification Hub',
    category: 'Sistemas Distribuídos',
    description: 'Serviço de alta concorrência focado no consumo de eventos de pedidos via RabbitMQ para envio e gerenciamento de notificações assíncronas.',
    tags: ['Go (Golang)', 'RabbitMQ', 'Event-Driven', 'Docker'],
    bgClass: 'bg-[#CDD0D6]',
    icon: Cpu,
    highlight: 'Mensageria Assíncrona',
  },
  {
    slug: 'catalog-api',
    title: 'Catalog Service',
    category: 'API REST & Cache',
    description: 'API de alto desempenho para gestão e consulta de catálogo de produtos, otimizada com cache em Redis.',
    tags: ['Go (Golang)', 'Redis', 'REST API', 'Docker'],
    bgClass: 'bg-[#C5DBC6]',
    icon: Server,
    highlight: 'Performance & Cache',
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 lg:py-28">
      <div className="max-w-275 mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-block text-xs font-medium tracking-[0.12em] uppercase text-primary mb-3">
              Projetos & Arquitetura
            </span>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Ecossistema de Microsserviços
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-[40ch]">
            Aplicações distribuídas em Go consumidas por este hub em Next.js.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.slug} 
                className="overflow-hidden group hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md border-border flex flex-col justify-between"
              >
                <div>
                  <CardHeader className="p-0">
                    <div className={`h-40 ${project.bgClass} w-full flex items-center justify-center relative`}>
                      <Icon className="w-12 h-12 text-foreground/20 group-hover:scale-110 transition-transform duration-300" />
                      {project.highlight && (
                        <span className="absolute top-3 right-3 text-[0.65rem] uppercase tracking-wider font-semibold bg-background/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-foreground border border-border">
                          {project.highlight}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[0.7rem] px-2 py-0.5 rounded-full font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-serif font-light text-xl mb-1">{project.title}</h3>
                    <span className="text-xs font-medium text-primary block mb-3">{project.category}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </CardContent>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline group-hover:gap-2.5 transition-all"
                  >
                    Ver arquitetura & detalhes <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}