"use client";
import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { SlideInFromLeft } from "../../../utils/SlideInFromLeft";
import { SlideInFromRight } from "../../../utils/SlideInFromRight";
import { Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`hero ${styles.hero} grid grid-cols-1 grid-rows-12 grid-flow-col justify-items-center items-end h-screen w-full`}
    >
      <div
        className={`${styles.cta} row-start-5 grid justify-items-center align-items-center`}
      >
        <SlideInFromRight className={`${styles.heroImage}`}>
          <span></span>
        </SlideInFromRight>
        <SlideInFromRight className={"grid justify-items-center z-30"}>
          <h2 className={`${styles.heading} text-center p-4 self-center`}>
            STRETCH YOUR BODY TO THE LIMIT
          </h2>
          <p className={"text-center text-white p-5"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
            quia, similique? Alias beatae consequatur dicta et eum, libero
            maiores nam natus perferendis praesentium provident quam quas saepe
            sapiente tenetur, vero!
          </p>
          <Button colorScheme={"orange"} className={"w-40 relative z-20"}>
            Purchase
          </Button>
        </SlideInFromRight>
      </div>
      <SlideInFromLeft className={"row-start-6 z-10"}>
        <Image
          src="/Yoga-Photos/Yogi-pose-1-lg-clear.png"
          alt="Woman with hands behind back pose"
          width={700}
          height={700}
        />
      </SlideInFromLeft>
    </section>
  );
};

export default Hero;
