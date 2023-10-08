import React from "react";
import Image from "next/image";

const Rental = () => {
  return (
    <div>
      Rental
      <Image
        src="/mockup/studio-rental.png"
        width={900}
        height={900}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Rental;
