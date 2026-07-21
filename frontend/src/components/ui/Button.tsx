import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

// Interface para as propriedades do botão
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
}

// Configurações de estilo para diferentes variantes e tamanhos do botão
const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

  secondary:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-400",

  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
};

const sizeClasses = {
  sm: "px-3 py-2 text-sm",

  md: "px-5 py-2.5 text-base",

  lg: "px-6 py-3 text-lg",
};

// Componente de botão reutilizável
function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Exportação do componente Button para ser usado em outros arquivos
export default Button;