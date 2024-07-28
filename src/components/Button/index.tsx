
import { MouseEventHandler } from "react";
import { ButtonType } from "@/enums/button";

import "./index.css";

export default function Button({
    children,
    onClick,
    id,
    type=ButtonType.primary
}: {
    id: string;
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType | undefined
}) {
    return (
        <button id={id} className={`p-btn ${type}`} onClick={onClick}>{children}</button>
    )
}
