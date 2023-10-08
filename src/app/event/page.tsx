import React from "react";
import Image from "next/image";

const Event = () => {
  return (
    <div>
      Events + Workshops
      <h1 className={"text-2xl"}>Upcoming Events</h1>
      <Image
        src="/mockup/events.png"
        width={900}
        height={900}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Event;
