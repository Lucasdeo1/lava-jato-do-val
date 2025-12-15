import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre Nós' },
  { href: '#services', label: 'Serviços' },
  { href: '#contact', label: 'Contato' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
            <Droplets className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className={cn(
            'font-display font-bold text-xl transition-colors',
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          )}>
            Lava Jato Do VAL
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full',
                isScrolled ? 'text-foreground' : 'text-primary-foreground/90'
              )}
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            <a href="https://wa.me/5537988175484" target="_blank" rel="noopener noreferrer">
              Agendar Agora
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn('w-6 h-6', isScrolled ? 'text-foreground' : 'text-primary-foreground')} />
          ) : (
            <Menu className={cn('w-6 h-6', isScrolled ? 'text-foreground' : 'text-primary-foreground')} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-foreground py-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
            >
              <a href="https://wa.me/5537988175484" target="_blank" rel="noopener noreferrer">
                Agendar Agora
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
