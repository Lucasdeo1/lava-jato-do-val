import { Droplets, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre nós' },
  { href: '#services', label: 'Serviços' },
  { href: '#contact', label: 'Contato' },
];

const socialLinks = [
  /*{ icon: Facebook, href: '#', label: 'Facebook' },*/
  { icon: Instagram, href: 'https://www.instagram.com/lavajatodoval/', label: 'Instagram' },
  /*{ icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' }*/,
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Lava Jato do VAL</span>
            </a>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Serviços de Limpeza automotiva que devolvem o brilho de carro novo.
Aprovado por muitos clientes satisfeitos.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/50 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Links rápidos</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Informações de contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Rua Lagoa da Prata, 550</li>
              <li>Divinópolis, MG</li>
              <li>+55 37 98817-5484</li>
              <li>lavajatodoval@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Lava-jato do VAL. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            
          </div>
        </div>
      </div>
    </footer>
  );
};
