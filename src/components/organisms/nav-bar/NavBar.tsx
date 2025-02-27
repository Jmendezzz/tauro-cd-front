import { useScrollPosition } from "@/shared/hooks/useScrollPosition";
import { Logo } from "@/components/atoms/logo/Logo";

import "./nav-bar.scss";
import { MobileNavBar } from "./MobileNavBar";
import { Link } from "react-router";


const SCROLL_THRESHOLD = 50;
const NAV_BAR_ITEMS = [
  { title: "Inicio", path: "/" },
  { title: "Nosotros", path: "/nosotros" },
  { title: "Contacto", path: "/contacto" },
]

export function NavBar() {
  const isScrolled = useScrollPosition(SCROLL_THRESHOLD);



  return (
    <nav className={`nav-bar ${isScrolled ? "nav-bar--scrolled" : ""}`}>
      <div className="nav-bar__container">
        <Logo size="sm" />
        
        <ul className="nav-bar__list">
          {
            NAV_BAR_ITEMS.map((item) => (
              <li key={item.title} className="nav-bar__item">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <MobileNavBar navItems={NAV_BAR_ITEMS} />

    </nav>
  );
}
