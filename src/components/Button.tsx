import type { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  // [x: string]: any;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="text-white font-semibold text-xl bg-accent py-3.5 rounded-full hover:bg-(--color-accent-secondary) cursor-pointer transition-colors"
    >
      {children}
    </button>
  );
}

export default Button;
