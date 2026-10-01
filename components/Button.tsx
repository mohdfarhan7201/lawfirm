import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "outline-dark" | "link";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon = true,
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-sans tracking-[0.12em] uppercase text-xs font-semibold transition-all duration-300 select-none group focus-visible:outline-2 focus-visible:outline-[#2A1E17]";

  const sizeClasses = {
    sm: "px-4 py-2.5 text-[11px] gap-2",
    md: "px-6 py-3.5 text-xs gap-2.5",
    lg: "px-8 py-4 text-xs gap-3",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#2A1E17] text-[#FAF8F5] hover:bg-[#443227] hover:text-[#FFFFFF] border border-[#2A1E17] hover:border-[#443227] shadow-sm active:scale-[0.98]",
    secondary:
      "bg-transparent text-[#2A1E17] border border-[#2A1E17] hover:bg-[#2A1E17] hover:text-[#FAF8F5] active:scale-[0.98]",
    dark:
      "bg-[#2A1E17] text-[#FAF8F5] border border-[#2A1E17] hover:bg-[#443227] hover:border-[#443227] hover:text-[#FFFFFF] active:scale-[0.98]",
    "outline-dark":
      "bg-transparent text-[#2A1E17] border border-[#2A1E17] hover:bg-[#2A1E17] hover:text-[#FFFFFF] hover:border-[#2A1E17] active:scale-[0.98]",
    link:
      "bg-transparent text-[#9C7348] p-0 hover:text-[#7D5933] underline underline-offset-4 decoration-1",
  }[variant];

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : null}
      <span>{children}</span>
      {icon && !loading && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, sizeClasses, variantClasses, className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        sizeClasses,
        variantClasses,
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
}
