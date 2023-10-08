"use client";
import React from "react";
import Image from "next/image";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section id="services" className={"mt-20"}>
      <div className={"grid justify-items-center"}>
        <Image
          src={"/Yoga-Photos/yoga-icon-pose-1.svg"}
          alt={"Icon of woman meditating"}
          height={"60"}
          width={"60"}
        />
        <div className={`${styles.line}`}></div>
        <div className="descripton grid justify-items-center">
          <h2 className="services-heading text-center text-4xl text-green-950 font-semibold mt-10">
            Your Spiritual Guide
          </h2>
          <p className={"text-black text-sm text-center mt-5 px-8"}>
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem auci elit consequat ipsutissem niuis sed odio
            sit amet nibh vulputate cursus a sit amet.
          </p>
        </div>
        <div className={`${styles.servicesCards} mt-20`}>
          <div className={`${styles.serviceCard} grid-area-1`}>test</div>
          <div className={`${styles.serviceCard} grid-area-2`}>test</div>
          <div className={`${styles.serviceCard} grid-area-3`}>test</div>
          <div className={`${styles.serviceCard} grid-area-4`}>test</div>
          <div className={`${styles.serviceCard} grid-area-5`}>test</div>
          <div className={`${styles.serviceCard} grid-area-6`}>test</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
