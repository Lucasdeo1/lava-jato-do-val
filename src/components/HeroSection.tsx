import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-carwash.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Animated Water Droplets Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-foreground/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-foreground/15 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary-foreground/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary-foreground/10 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-up">
          Serviços de Cuidados com Automóveis
        </span>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up-delay-1 leading-tight">
            Seu Carro Merece
          <br />
          <span className="text-gradient bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            O Brilho Perfeito.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
          Experimente uma lavagem de carros que devolve o brilho de carro novo.
Tratamos cada veículo como se fosse nosso, com atenção meticulosa aos detalhes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <a href="https://wa.me/5537988175484" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Agendar via WhatsApp
            </a>
          </Button>
          <Button
            asChild
            /*variant="outline"*/
            size="lg"
            /*className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
          */className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <a href="#services">
              Mostrar Serviços
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors cursor-pointer"
      >
        <span className="text-sm mb-2">Role para baixo</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};
