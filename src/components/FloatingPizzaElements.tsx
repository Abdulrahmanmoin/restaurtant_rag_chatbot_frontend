import { FC } from 'react';

interface FloatingElementProps {
  className?: string;
}

export const PizzaSlice: FC<FloatingElementProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10L90 85H10L50 10Z" fill="hsl(45 90% 65%)" />
    <path d="M50 15L85 80H15L50 15Z" fill="hsl(35 85% 55%)" />
    <circle cx="45" cy="50" r="6" fill="hsl(0 70% 45%)" />
    <circle cx="60" cy="55" r="5" fill="hsl(0 70% 45%)" />
    <circle cx="50" cy="68" r="6" fill="hsl(0 70% 45%)" />
    <ellipse cx="38" cy="62" rx="4" ry="3" fill="hsl(120 40% 35%)" />
    <ellipse cx="65" cy="70" rx="4" ry="3" fill="hsl(120 40% 35%)" />
  </svg>
);

export const Pepperoni: FC<FloatingElementProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="22" fill="hsl(0 70% 40%)" />
    <circle cx="18" cy="18" r="3" fill="hsl(0 60% 30%)" />
    <circle cx="32" cy="20" r="2.5" fill="hsl(0 60% 30%)" />
    <circle cx="25" cy="32" r="3" fill="hsl(0 60% 30%)" />
    <circle cx="15" cy="30" r="2" fill="hsl(0 60% 30%)" />
    <circle cx="35" cy="33" r="2.5" fill="hsl(0 60% 30%)" />
  </svg>
);

export const Mushroom: FC<FloatingElementProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="25" cy="20" rx="18" ry="14" fill="hsl(30 30% 75%)" />
    <rect x="18" y="20" width="14" height="20" rx="2" fill="hsl(45 20% 90%)" />
    <ellipse cx="16" cy="18" rx="4" ry="3" fill="hsl(30 20% 60%)" />
    <ellipse cx="34" cy="17" rx="3" ry="2.5" fill="hsl(30 20% 60%)" />
    <ellipse cx="25" cy="14" rx="4" ry="3" fill="hsl(30 20% 60%)" />
  </svg>
);

export const Basil: FC<FloatingElementProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 55V30" stroke="hsl(120 40% 30%)" strokeWidth="3" />
    <ellipse cx="25" cy="20" rx="15" ry="20" fill="hsl(120 50% 35%)" />
    <path d="M25 5C25 5 15 15 25 35C35 15 25 5 25 5Z" fill="hsl(120 55% 40%)" />
  </svg>
);

export const Cheese: FC<FloatingElementProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 40L55 45L50 5L5 40Z" fill="hsl(45 90% 60%)" />
    <circle cx="20" cy="30" r="5" fill="hsl(45 85% 50%)" />
    <circle cx="35" cy="25" r="4" fill="hsl(45 85% 50%)" />
    <circle cx="42" cy="35" r="3" fill="hsl(45 85% 50%)" />
  </svg>
);

export const FloatingPizzaElements: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Pizza slice - top left */}
      <PizzaSlice className="absolute top-[10%] left-[5%] w-16 h-16 md:w-24 md:h-24 opacity-60 animate-float" />
      
      {/* Pepperoni - top right */}
      <Pepperoni className="absolute top-[15%] right-[10%] w-10 h-10 md:w-14 md:h-14 opacity-50 animate-float-slow" />
      
      {/* Mushroom - mid left */}
      <Mushroom className="absolute top-[40%] left-[8%] w-12 h-12 md:w-16 md:h-16 opacity-40 animate-float-reverse" />
      
      {/* Basil - bottom right */}
      <Basil className="absolute bottom-[25%] right-[8%] w-10 h-12 md:w-14 md:h-16 opacity-50 animate-float" />
      
      {/* Cheese - bottom left */}
      <Cheese className="absolute bottom-[15%] left-[12%] w-14 h-12 md:w-20 md:h-16 opacity-40 animate-float-slow" />
      
      {/* Extra pepperoni - mid right */}
      <Pepperoni className="absolute top-[55%] right-[5%] w-8 h-8 md:w-12 md:h-12 opacity-35 animate-float-reverse" />
      
      {/* Pizza slice - bottom center */}
      <PizzaSlice className="absolute bottom-[5%] left-[45%] w-12 h-12 md:w-16 md:h-16 opacity-30 animate-float-slow" />
    </div>
  );
};
