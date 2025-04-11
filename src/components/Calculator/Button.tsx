
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'number' | 'operation' | 'equals' | 'clear';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'number',
  className
}) => {
  const baseStyles = "flex items-center justify-center rounded-md text-xl md:text-2xl font-semibold transition-all duration-100 active:animate-button-press shadow-md hover:brightness-110";
  
  const variantStyles = {
    number: "bg-purpleLight text-white",
    operation: "bg-purpleMid text-white",
    equals: "bg-purpleDark text-white",
    clear: "bg-red-500 text-white"
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
