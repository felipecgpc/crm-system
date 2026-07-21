import type { InputHTMLAttributes } from "react";

import { cn } from "../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
/* A interface está vazia. Isso está correto.
Por quê? Porque, neste momento, não precisamos de nenhuma propriedade personalizada.O próprio React já fornece:
- type
- placeholder
- value
- defaultValue
- onChange
- disabled
- required
- autoComplete
- name
- id
e dezenas de outras. Não faz sentido reescrevê-las. */

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900",
        "placeholder:text-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export default Input;