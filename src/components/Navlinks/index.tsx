import Link from "next/link";

import "./index.css";
import Button from "../Button";

const NavLink = ({href, name}: {href: string, name: string}) => (
    <li className="nav-link">
        <Link href={href}>{name}</Link>
    </li>
)

export default function NavLinks() {

    return (
        <ul className="nav-link-container">
            <NavLink href="/" name="Home" />
            <NavLink href="/about" name="About" />
            <NavLink href="/process" name="Process" />
            <Button id="contact-btn">Contact</Button>
        </ul>
    )
}
