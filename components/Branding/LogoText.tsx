import { cn } from "@/lib/utils";

interface LogoTextProps {
  variant?: "default" | "light" | "dark";
  classname?: string;
}

export default function LogoText({ variant="default", classname }: LogoTextProps) {
  const textColor = {
    default: "text-white dark:text-gray-900",
    light: "text-white",
    dark: "text-gray-900"
  }[variant];

  return (
    <span className={cn(classname, `pt-1 text-2xl font-bold ${textColor}`)}>
   
        Kumar Shivam
    </span>
  );
}
