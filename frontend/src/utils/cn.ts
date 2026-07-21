import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* A função utilitária cn() combina clsx e tailwind-merge para permitir a aplicação de classes Tailwind de forma condicional e segura, resolvendo conflitos automaticamente. Ela junta múltiplas classes em uma só string, prioriza a última regra declarada e elimina estilos redundantes. */

/* Imagine que a função cn() é um filtro inteligente para o visual do seu site:
1. clsx (O Seletor): Escolhe a roupa certa para o momento (ex: coloca casaco apenas se estiver chovendo).
2. tailwind-merge (O Limpador): Se você pedir "camisa azul" e depois "camisa vermelha", ele joga fora a azul para você não vestir as duas.
Resultado: Ela junta seus estilos, tira as repetições e garante que a última ordem que você deu seja a que vale. */