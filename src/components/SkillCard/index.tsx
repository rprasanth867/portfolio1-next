
import "./index.css";

type IProps = {
    logo: string | React.ReactNode;
    name: string;
}

export default function SkillCard({
    logo,
    name
}: IProps) {
    return (
        <li className="skill-card">
            {logo}
            <p>{name}</p>
        </li>
    )
}
