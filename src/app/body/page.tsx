import React from "react";
import Link from "next/link";
import Image from "next/image";

const Body = () => {
  return (
    <div>
      <nav>
        <Link href="/classes" className={"mr-5"}>
          Classes
        </Link>
        <Link href="/event" className={"mr-5"}>
          Event
        </Link>
        <Link href="/gallery" className={"mr-5"}>
          Gallery
        </Link>
        <Link href="/instructors" className={"mr-5"}>
          Instructors
        </Link>
        <Link href="/rental" className={"mr-5"}>
          Rental
        </Link>
        <Link href="/services" className={"mr-5"}>
          Services
        </Link>
        <Link href="/specialist" className={"mr-5"}>
          Specialist
        </Link>
      </nav>
      <section className={"hero mt-5 bg-green-950 w-full h-[300px]"}>
        Hero
      </section>
      <section className={"services mt-16"}>
        Classes
        <Image
          src="/mockup/services.png"
          width={900}
          height={400}
          alt="Picture of the author"
        />
        <Image
          src="/mockup/classes-main.png"
          width={900}
          height={900}
          alt="Picture of the author"
        />
        Services
        <Image
          src="/mockup/services2.png"
          width={900}
          height={400}
          alt="Picture of the author"
        />
      </section>

      <section className={"about-us mt-16 bg-gray-950 w-full"}>
        About us
        <Image
          src="/mockup/about-us.png"
          width={900}
          height={900}
          alt="Picture of the author"
        />
      </section>

      <section className={"cta-cards mt-16"}>
        CTA Cards
        <Image
          src="/mockup/cta-buttons.png"
          width={900}
          height={900}
          alt="Picture of the author"
        />
      </section>

      {/*<section className={'classes mt-16'}>*/}
      {/*    Class Selection*/}
      {/*    How many classes should show?*/}
      {/*    <Image*/}
      {/*        src="/mockup/classes.png"*/}
      {/*        width={900}*/}
      {/*        height={900}*/}
      {/*        alt="Picture of the author"*/}
      {/*    />*/}
      {/*</section>*/}
      <section className={"reviews mt-16"}>
        Reviews Going with green? Should we move the reviews above classes?
        <Image
          src="/mockup/reviews.png"
          width={900}
          height={900}
          alt="Picture of the author"
        />
      </section>
      <footer className={"footer mt-16"}>
        Footer Remove chat?
        <Image
          src="/mockup/footer.png"
          width={900}
          height={900}
          alt="Picture of the author"
        />
      </footer>
    </div>
  );
};
export default Body;
