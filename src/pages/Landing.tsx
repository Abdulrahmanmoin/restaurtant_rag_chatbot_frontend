import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FloatingPizzaElements } from '@/components/FloatingPizzaElements';
import { MessageCircle, Sparkles, Clock, MapPin } from 'lucide-react';

const Landing: FC = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-hero relative overflow-hidden">
      <FloatingPizzaElements />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍕</span>
            <span className="font-display font-bold text-xl text-foreground">
              Pizza <span className="text-primary">Alchemy</span>
            </span>
          </div>
          <Link to="/chat">
            <Button variant="outline" size="sm" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6">
        <section className="max-w-4xl mx-auto text-center pt-16 md:pt-24 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Pizza Assistant</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Where Magic Meets
            <br />
            <span className="text-gradient-orange">Melted Cheese</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Welcome to Pizza Alchemy – where every slice is crafted with passion. 
            Got questions? Our AI assistant knows everything about our menu, ingredients, and specials!
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/chat">
              <Button variant="hero" className="gap-3">
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-4xl mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Ask Anything',
                description: 'Menu questions, dietary info, recommendations – our AI has all the answers.',
              },
              {
                icon: Clock,
                title: 'Instant Responses',
                description: 'Get quick, accurate information about our pizzas and services 24/7.',
              },
              {
                icon: MapPin,
                title: 'Local & Fresh',
                description: 'Learn about our locally-sourced ingredients and daily specials.',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gradient-card border border-border rounded-2xl p-6 shadow-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Pizza Alchemy. Crafted with 🍕 and love.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
