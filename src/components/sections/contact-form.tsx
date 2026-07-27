// src/components/sections/contact-form.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Lógica do envio aqui
  }

  return (
    <div className="bg-background border border-border rounded-xl p-6 sm:p-8">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="nome" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Nome
          </Label>
          <Input id="nome" placeholder="Seu nome" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            E-mail
          </Label>
          <Input id="email" type="email" placeholder="seu@email.com" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="assunto" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Assunto
          </Label>
          <Input id="assunto" placeholder="Sobre o que você quer falar?" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="mensagem" className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Mensagem
          </Label>
          <Textarea
            id="mensagem"
            rows={5}
            placeholder="Conta mais sobre seu projeto..."
            required
            className="resize-y min-h-32.5"
          />
        </div>

        <Button type="submit" size="lg" className="w-full mt-2 rounded-full">
          Enviar mensagem
        </Button>
      </form>
    </div>
  );
}