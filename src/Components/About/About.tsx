import React from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import Image from "next/image";
import styles from "@/Components/Services/Services.module.scss";
import { SlideInFromRight } from "../../../utils/SlideInFromRight";

const About = () => {
  return (
    <LazyMotion features={domAnimation}>
      <SlideInFromRight>
        <section id="about" className={"mt-20"}>
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
                About Us
              </h2>
              <div className="about-description mt-16">
                <p className={"bg-black p-20 text-center"}>
                  I Am Yogi Studios was founded in 2020 as a virtual yoga studio
                  for Women of Color. In the height of the pandemic, the world
                  experienced trauma that would take a lifetime to heal. Our
                  mission is to train Women healing techniques that would be
                  practiced for generations to come. Like many, Lisa Robertson,
                  founder of I Am Yogi, suffered from depression and anxiety
                  while being pregnant with her second child. Yoga was suggested
                  by her healthcare provider and ultimately what had saved her
                  life. The bigger problem was this life-changing method of
                  healing was not readily available to black women. No stable
                  studio resided in Southeast Queens and no consistent classes.
                  She traveled for her practice and penetrated their spaces with
                  her blackness. Today I Am Yogi has a network of 350 black
                  women in Jamaica Queens, 10 trained and certified yoga
                  instructors, built their very own yoga apparel and accessory
                  line and is recognized with a citation for their advocacy for
                  women’s health and wellness within the community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SlideInFromRight>
    </LazyMotion>
  );
};

export default About;
