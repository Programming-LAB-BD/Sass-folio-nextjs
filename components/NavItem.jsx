import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavItem({ name, iconClass, navigate, index }) {
  return (
    <li className="p-3 bg-primary text-secondary relative nav-item" key={index}>
      <Link href={navigate} className="flex gap-1 items-center">
        <i className={iconClass}></i>
        <FontAwesomeIcon icon={iconClass} size="md" />
        <span className="ml-2 font-semibold">{name}</span>
      </Link>
    </li>
  );
}
