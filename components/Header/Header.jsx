import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navItems = [
  {
    name: "Home",
    iconClass: "fa-solid fa-house",
    navigate: "/",
  },
  {
    name: "About",
    iconClass: "fa-solid fa-user",
    navigate: "/about",
  },
  {
    name: "Services",
    iconClass: "fa-solid fa-gear",
    navigate: "/services",
  },
  {
    name: "Portfolio",
    iconClass: "fa-solid fa-briefcase",
    navigate: "/portfolio",
  },
  {
    name: "Contact",
    iconClass: "fa-solid fa-envelope",
    navigate: "/contact",
  },
];
export default function Header() {
  return (
    <header id="header">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </header>
  );
}
