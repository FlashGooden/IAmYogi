import React from "react";
import Image from "next/image";

const Specialist = () => {
  return (
    <div>
      <div>
        <h1 className={"text-2xl"}>Specialist</h1>

        <Image
          src="/mockup/professional-services.png"
          width={900}
          height={900}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Specialist;
