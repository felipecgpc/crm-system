import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/* O papel do card é ser um container para outros elementos. Por isso, ele precisa receber children. */

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-6 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;