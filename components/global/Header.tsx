import LogoImage from "../Branding/LogoImage";
import LogoText from "../Branding/LogoText";

export default function Header() {
  return (
    <header className="h-14 w-full fixed top-0 z-50 bg-gray-100">
      <div className="flex items-center">
        <LogoImage/><LogoText variant="dark" />
      </div>
    </header>
  );
}
