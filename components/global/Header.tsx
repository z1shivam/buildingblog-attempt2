import LogoImage from "../Branding/LogoImage";
import LogoText from "../Branding/LogoText";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 h-14 w-full  bg-gray-800">
      <div className="flex h-full items-center px-3">
        <LogoText variant="light" />
      </div>
    </header>
  );
}
