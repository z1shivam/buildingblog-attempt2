import LogoImage from "../Branding/LogoImage";
import LogoText from "../Branding/LogoText";

export default function Header() {
  return (
    <header className="h-14 w-full fixed top-0 z-50 bg-indigo-700">
      <div className="flex items-center h-full px-3">
        <LogoImage variant="light"/><LogoText variant="light" />
      </div>
    </header>
  );
}
