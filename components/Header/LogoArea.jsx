import black_logo from "@/public/img/black_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function LogoArea({ width, handleCloseBtn }) {
  return (
    <div id="logo-area" className={width}>
      <Link href="/" onClick={handleCloseBtn}>
        <Image
          src={black_logo}
          alt="Programming LAB BD"
          className="p-2 ml-6 dark:invert"
        />
      </Link>
    </div>
  );
}
