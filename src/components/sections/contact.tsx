// src/components/sections/contact.tsx
import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section id="contato" className="bg-card border-t border-border py-20 lg:py-28">
      <div className="max-w-275 mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div>
          <span className="inline-block text-xs font-medium tracking-[0.12em] uppercase text-primary mb-3">
            Contato
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Vamos trocar uma <br />ideia?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Estou sempre aberto a trocar ideias sobre desenvolvimento de software, arquitetura de sistemas, docência e tecnologia. 
            Seja para um café virtual, tirar dúvidas sobre os bootcamps ou bater um papo sobre o mercado — é só mandar uma mensagem!
          </p>

          <ul className="flex flex-col gap-3">
            {['alex@exemplo.com', 'GitHub', 'LinkedIn'].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.includes('@') ? `mailto:${item}` : '#'}
                  className="block text-sm font-medium text-foreground pb-3 border-b border-border hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Formulário Isolado em Client Component */}
        <ContactForm />
      </div>
    </section>
  );
}