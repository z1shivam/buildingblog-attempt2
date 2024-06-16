import defaultLogoImage from "@/public/logo-default.png";
import lightLogoImage from "@/public/logo-light.png";
import darkLogoImage from "@/public/logo-dark.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoImageProps {
  variant?: "default" | "shaded" | "light" | "dark";
  size?: "sm" | "md" | "lg" | number;
  classname?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const variantImages = {
  default: defaultLogoImage,
  light: lightLogoImage,
  dark: darkLogoImage,
};

export default function LogoImage({
  variant = "default",
  classname,
  size = "md",
}: LogoImageProps) {
  classname = cn(
    classname,
    typeof size === "number" ? `w-[${size}] h-[${size}]` : sizeClasses[size],
    "inline-block",
  );

  if (variant === "shaded") {
    return (
      <>
        <Image
          src={lightLogoImage}
          alt="Light Logo"
          className={cn("block dark:hidden", classname)}
        />
        <Image
          src={darkLogoImage}
          alt="Dark Logo"
          className={cn("hidden dark:block", classname)}
        />
      </>
    );
  }

  return (
    <Image
      src={variantImages[variant]}
      alt={`${variant} Logo`}
      className={classname}
    />
  );
}
