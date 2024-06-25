import black_logo from "@/public/img/black_logo.png";
import Image from "next/image";

export default function LogoArea({ width }) {
  return (
    <div id="logo-area" className={width}>
      <a href="#home">
        <Image
          src={black_logo}
          placeholder="blur"
          alt="Programming LAB BD"
          className="p-2 ml-6 dark:invert"
        />
      </a>
    </div>
  );
}
