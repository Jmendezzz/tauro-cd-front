import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ROUTES } from "@/config/constants/routes.constants";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router";
import "./mobile-nav-bar.scss";

interface MobileNavBarProps {
    navItems: { title: string, path: string }[];
}

export function MobileNavBar({ navItems }: MobileNavBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);

    useClickOutside({ refs: [buttonRef, menuRef], callback: () => setIsMenuOpen(false) });

    return (
        <>
            <button
                className="mobile-nav-bar__toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
                ref={buttonRef}
            >
                <IoMenu color="white" />
            </button>
            <motion.ul
                className={`mobile-nav-bar__list ${isMenuOpen ? "mobile-nav-bar__list--open" : ""}`}
                initial={{ x: "100%" }}
                animate={{ x: isMenuOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                ref={menuRef}
            >
                {
                    navItems.map((item) => (
                        <li key={item.title} className="mobile-nav-bar__item">
                            <Link to={item.path} onClick={() => setIsMenuOpen(false)}>{item.title}</Link>
                        </li>
                    ))
                }
            </motion.ul>
        </>

    )

}