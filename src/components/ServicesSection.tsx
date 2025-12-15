import { Button } from '@/components/ui/button';
import { MessageCircle, Car, Sparkles, Droplets, Shield, Palette, Wind } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Geral Simples',
    description: 'Lavagem externa rápida, perfeita para quem tem uma rotina agitada. Enxágue de alta pressão, lavagem com espuma e secagem.',
    price: ''
  },
  {
    icon: Car,
    title: 'Limpexa Detalhada Completa',
    description: 'Limpeza completa do interior e exterior, incluindo aspiração, polimento do painel, limpeza dos vidros e brilho nos pneus.',
    price: '',
  },
  {
    icon: Sparkles,
    title: 'Limpeza na Parte Inferior do Carro',
    description: 'Nosso lavajato tem uma rampa feita exclusivamente para fazer este tipo de serviço e entregar o seu carro limpo em todas as áreas do seu veículo.',
    price: '',
  },
  {
    icon: Palette,
    title: 'Limpeza Profunda Interior',
    description: 'Limpeza e condicionamento do couro, eliminação de odores e remoção de manchas para um interior renovado e com aparência de novo.',
    price: '',
  },
  {
    icon: Wind,
    title: 'Limpeza do Compartimento do Motor',
    description: 'Limpeza segura e completa do motor que remove a sujidade e restaura o compartimento do motor.',
    price: '',
  },
  {
    icon: Shield,
    title: 'Limpeza Personalizada',
    description: 'Este serviço consiste em uma negociação transparente entre ambas as partes, permitindo definir as melhores soluções para o veículo. Caso o cliente deseje personalizar ou ajustar os serviços além dos planos disponíveis, estamos preparados para oferecer alternativas adequadas às suas necessidades.',
    price: '',
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Soluções</span> para cuidados com carros 
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha entre nossa gama de serviços de limpeza automotiva,
todos realizados com o mesmo carinho.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-primary">
                  {service.price}
                </span>
                <Button
                  asChild
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <a 
                    href={`https://wa.me/5537988175484?text=Olá, estou interessado no serviço de ${service.title} .`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    /*className="flex items-center gap-2"*/
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          
                  >
                    <MessageCircle className="w-4 h-4" />
                    Agendar Agora
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
