import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoArea from "./LogoArea";
import NavItem from "./NavItem";

export default function MobileNav({ navItems }) {
  const Items = [...navItems];
  return (
    <div id="mobile_nav" className="md:hidden">
      <div
        id="mobile_nav_3dot"
        className="fixed top-4 left-4 text-secondary text-2xl cursor-pointer transition-all z-10"
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" size="md" />
      </div>
      <nav
        id="main_nav"
        className="fixed top-0 left-0 right-0 w-screen bg-primary flex justify-center py-1 border-b-[5px] border-secondary"
      >
        <LogoArea width={"max-w-[15rem]"} />
      </nav>
      <div className="h-screen w-screen bg-full_screen_shadow fixed z-20 outside-of-navber"></div>
      <aside
        id="nav"
        className="fixed top-0 h-screen max-w-[280px] bg-primary flex flex-col gap-20 py-10 border-secondary border-r-[5px] rounded-r-[10px] navbar z-50"
      >
        <div
          id="close-area"
          className="text-secondary text-3xl absolute cursor-pointer top-2 right-2"
        >
          <FontAwesomeIcon icon="fa-solid fa-xmark" size="md" />
        </div>
        <LogoArea width={"w-[80%]"} />
        <div id="nav-area" className="">
          <ul>
            {Items.map((item, index) => (
              <NavItem // There is key prop needed here
                name={item.name}
                iconClass={item.iconClass}
                navigate={item.navigate}
                index={index}
                key={index}
              />
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
