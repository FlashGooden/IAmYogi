import React from "react";
import Image from "next/image";

const Instructors = () => {
  return (
    <div>
      <h1 className={"text-2xl"}>Instructors</h1>
      <Image
        src="/mockup/meet-instructors-1.png"
        width={900}
        height={900}
        alt="Picture of the author"
      />
      <Image
        src="/mockup/meet-instructors-2.png"
        width={900}
        height={900}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Instructors;
