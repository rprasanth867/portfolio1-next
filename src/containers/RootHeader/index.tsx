
import BrandingLogo from "@/components/Logo";
import NavLinks from "@/components/Navlinks";

import "./index.css";

export default function RootHeader() {
    return (
        <header className="root-header">
            <nav>
                <BrandingLogo />
                <NavLinks />
            </nav>
        </header>
    )
}
