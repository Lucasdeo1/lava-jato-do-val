import { Shield, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '1000+', label: 'Clientes satisfeitos' },
  { icon: Award, value: '6+', label: 'Anos de experiência' },
  { icon: Shield, value: '100%', label: 'Taxa de satisfação' },
  { icon: Clock, value: '24/7', label: 'Suporte ao Cliente' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Nós nos preocupamos com o seu
              <span className="text-primary"> Veículo</span> Tanto Quanto Você
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Aqui no LAVA JATO do VAL, acreditamos que todo carro merece cuidados premium. Fundada com paixão pela excelência automotiva, nossa equipe de profissionais treinados utiliza apenas os melhores produtos ecológicos e equipamentos de ponta para entregar resultados que superam as expectativas.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nosso compromisso com a qualidade nos tornou a escolha confiável para milhares de proprietários de veículos. Desde uma simples lavagem externa até um detalhamento completo, abordamos cada serviço com a mesma dedicação e atenção aos detalhes que definiram nossa reputação por mais de 6 anos.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
