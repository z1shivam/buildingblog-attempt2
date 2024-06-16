import { cn } from "@/lib/utils";
import siteconfig from "@/data/site.config";
import { Skranji } from "next/font/google";

const skranji = Skranji({
  subsets: ["latin"],
  weight: ["400"],
});

interface LogoTextProps {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg" | number;
  classname?: string;
}

const sizeClasses = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
};

export default function LogoText({
  variant = "default",
  size = "md",
  classname,
}: LogoTextProps) {
  const textColor = {
    default: "text-white dark:text-gray-900",
    light: "text-white",
    dark: "text-gray-900",
  }[variant];

  const textSizeClass =
    typeof size === "number" ? `text-[${size}px]` : sizeClasses[size];

  return (
    <span
      className={cn(`pt-1 font-bold ${textColor} ${textSizeClass}`, classname, skranji.className)}
    >
      {siteconfig.textOnLogo}
    </span>
  );
}
