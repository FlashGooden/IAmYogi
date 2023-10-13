"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
import { NavigationHamburger } from "@/Components/Navigation/NavigationHamburger";

const Navigation = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const backgroundColor = isLargerThan720 ? "bg-green" : "bg-white";

  return (
    <section
      id="navigation"
      className={`absolute grid grid-cols-12 place-content-between w-full z-10 ${backgroundColor}`}
    >
      <Image
        src={"/Yoga-Photos/I-Am-Yogi-Logo-Clear.png"}
        className="col-span-3 ml-6"
        alt="I Am Yogi Logo"
        width={100}
        height={100}
      />
      {isLargerThan720 ? (
        <nav className="col-span-9 justify-self-end mt-12 mr-4">
          <ul className={`nav-links grid-flow-col-dense grid gap-4`}>
            <Link href="/classes" className={"text-white"}>
              Classes
            </Link>
            <Link href="/event" className={"text-white"}>
              Event
            </Link>
            <Link href="/gallery" className={"text-white"}>
              Gallery
            </Link>
            <Link href="/instructors" className={"text-white"}>
              Instructors
            </Link>
            <Link href="/rental" className={"text-white"}>
              Rental
            </Link>
            <Link href="/services" className={"text-white"}>
              Services
            </Link>
            <Link href="/specialist" className={"text-white"}>
              Specialist
            </Link>
          </ul>
        </nav>
      ) : (
        <NavigationHamburger />
      )}
    </section>
  );
};

export default Navigation;
