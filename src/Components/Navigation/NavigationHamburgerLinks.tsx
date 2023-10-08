import Link from "next/link";
import React, { Fragment } from "react";
import { FadeAndScale } from "../../../utils/FadeAndScale";

const navLinks = [
  { text: "Classes", href: "/classes" },
  { text: "Event", href: "/event" },
  { text: "Gallery", href: "/gallery" },
  { text: "Instructors", href: "/instructors" },
  { text: "Rental", href: "/rental" },
  { text: "Services", href: "/services" },
  { text: "Specialist", href: "/specialist" },
];

type NavLinkProps = {
  text: string;
  href: string;
};

type NavigationLinksProps = {};

const linkStyles =
  "duration-300 text-white text-base md:text-lg hover:text-pink-950";
const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <FadeAndScale>
      <Link className={linkStyles} href={href}>
        {text}
      </Link>
    </FadeAndScale>
  );
};

export const NavigationLinks: React.FC<NavigationLinksProps> = () => {
  return (
    <nav className="sm:flex mt-4 justify-around w-full px-6 max-w-7xl">
      {navLinks.map(({ text, href }, index) => (
        <Fragment key={index}>
          <NavLink text={text} href={href} />
        </Fragment>
      ))}
    </nav>
  );
};
