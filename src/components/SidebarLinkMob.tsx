import Image from "next/image";
import Link from "next/link";
import React from "react";

type LinkProps = {
  label: string;
  icon: string;
  route: string;
};

type SidebarLinkProps = {
  link: LinkProps;
  isActive: boolean;
  isMob?: boolean;
};

const SidebarLinkMob = ({ link, isActive, isMob }: SidebarLinkProps) => {
  return (
    <li
      key={link.route}
      className={`${
        isActive && "gradient-text"
      } p-18 flex whitespace-nowrap text-dark-700`}
    >
      <Link className="sidebar-link cursor-pointer" href={link.route}>
        <Image
          src={link.icon}
          alt="logo"
          width={24}
          height={24}
        />
        {link.label}
      </Link>
    </li>
  );
};

export default SidebarLinkMob;
