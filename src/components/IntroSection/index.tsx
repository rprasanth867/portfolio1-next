import Image from "next/image";
import myImg from "../../assets/images/unsplash_wKOKidNT14w.png";

import "./index.css";

export default function IntroSection() {

    return (
        <div className="intro-section-main-container">
            <div>
                <h1 className="heading">Hello, I’m <br />  <span className="name">Prasanth Rudrakshula</span></h1>
                <p className="paragraph">I&apos;m a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            </div>
            <div>
                <Image width={800} height={1000} src={myImg} alt="iamge-error" />
            </div>
        </div>
    )
}
