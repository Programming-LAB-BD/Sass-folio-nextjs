"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  name,
  iconClass,
  navigate,
  index,
  handleCloseBtn,
}) {
  const currentPath = usePathname();

  return (
    <li
      className={`${
        currentPath === navigate && "active"
      } p-3 bg-primary text-secondary relative nav-item`}
      key={index}
    >
      <Link
        href={navigate}
        className="flex gap-1 items-center"
        onClick={handleCloseBtn}
      >
        <i className={iconClass}></i>
        <FontAwesomeIcon icon={iconClass} size="md" />
        <span className="ml-2 font-semibold">{name}</span>
      </Link>
    </li>
  );
}
