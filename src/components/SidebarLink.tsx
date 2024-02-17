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
};

const SidebarLink = ({ link, isActive }: SidebarLinkProps) => {
  return (
    <li
      key={link.route}
      className={`sidebar-nav_element group ${
        isActive ? "bg-purple-gradient text-white" : "text-gray-700"
      }`}
    >
      <Link className="sidebar-link" href={link.route}>
        <Image
          src={link.icon}
          alt="logo"
          width={24}
          height={24}
          className={`${isActive ? "brightness-200" : ""}`}
        />
        {link.label}
      </Link>
    </li>
  );
};

export default SidebarLink;
