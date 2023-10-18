"use client";
import React from "react";
import Image from "next/image";
import styles from "./Services.module.scss";
import { domAnimation, LazyMotion } from "framer-motion";
import { SlideInFromLeft } from "../../../utils/SlideInFromLeft";
import HoverColor from "../../../utils/HoverColorCard";
import Link from "next/link";
import { FadeAndScale } from "../../../utils/FadeAndScale";

const Services = () => {
  return (
    <LazyMotion features={domAnimation}>
      <SlideInFromLeft>
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
                sollicitudin, lorem auci elit consequat ipsutissem niuis sed
                odio sit amet nibh vulputate cursus a sit amet.
              </p>
            </div>
            <div
              className={`${styles.servicesCards} text-center font-semibold mt-20`}
            >
              <div className={`${styles.serviceCard} inline grid-area-1`}>
                <HoverColor color={"#1CAB68"} className={`${styles.image}`}>
                  <Image
                    src={"/Yoga-Photos/services-3.png"}
                    alt={"Icon of woman meditating"}
                    width={200}
                    height={200}
                    className={`${styles.image}`}
                  />
                  <div className={`${styles.cardText}`}>
                    <Link
                      href="/rental"
                      className={`${styles.link} transition-opacity duration-300`}
                    >
                      HATHA YOGA
                    </Link>
                  </div>
                </HoverColor>
              </div>
              <div className={`${styles.serviceCard} grid-area-2`}>
                <HoverColor color={"#1CAB68"} className={`${styles.image}`}>
                  <Image
                    src={"/Yoga-Photos/services-4.jpeg"}
                    alt={"Icon of woman meditating"}
                    width={200}
                    height={200}
                    className={`${styles.image}`}
                  />
                  <div className={`${styles.cardText}`}>
                    <Link
                      href="/rental"
                      className={`${styles.link} transition-opacity duration-300`}
                    >
                      VINYASA YOGA{" "}
                    </Link>
                  </div>
                </HoverColor>
              </div>
              <div className={`${styles.serviceCard} grid-area-3`}>
                <HoverColor color={"#1CAB68"} className={`${styles.image}`}>
                  <Image
                    src={"/Yoga-Photos/services-2.jpeg"}
                    alt={"Icon of woman meditating"}
                    width={200}
                    height={200}
                    className={`${styles.image}`}
                  />
                  <div className={`${styles.cardText}`}>
                    <Link
                      href="/rental"
                      className={`${styles.link} transition-opacity duration-300`}
                    >
                      INVERSIONS
                    </Link>
                  </div>
                </HoverColor>
              </div>
              <div className={`${styles.serviceCard} grid-area-4`}>
                <HoverColor color={"#1CAB68"} className={`${styles.image}`}>
                  <Image
                    src={"/Yoga-Photos/services-5.jpeg"}
                    alt={"Icon of woman meditating"}
                    width={200}
                    height={200}
                    className={`${styles.image}`}
                  />
                  <div className={`${styles.cardText}`}>
                    <Link
                      href="/rental"
                      className={`${styles.link} transition-opacity duration-300`}
                    >
                      CORPORATE/ ORGANIZATIONAL CLASSES
                    </Link>
                  </div>
                </HoverColor>
              </div>
              <div className={`${styles.serviceCard} grid-area-5`}>
                <HoverColor color={"#1CAB68"} className={`${styles.image}`}>
                  <Image
                    src={"/Yoga-Photos/services-6.jpeg"}
                    alt={"Icon of woman meditating"}
                    width={200}
                    height={200}
                    className={`${styles.image}`}
                  />
                  <div className={`${styles.cardText}`}>
                    <Link
                      href="/rental"
                      className={`${styles.link} transition-opacity duration-300`}
                    >
                      PRIVATE CLASSES
                    </Link>
                  </div>
                </HoverColor>
              </div>
              <div className={`${styles.serviceCard} grid-area-6`}>
                <HoverColor color={"#1CAB68"} className={`${styles.image}`}>
                  <Image
                    src={"/Yoga-Photos/services-4.jpeg"}
                    alt={"Icon of woman meditating"}
                    width={200}
                    height={200}
                    className={`${styles.image}`}
                  />
                  <div className={`${styles.cardText}`}>
                    <Link
                      href="/rental"
                      className={`${styles.link} transition-opacity duration-300`}
                    >
                      PRIVATE YOGA TEAM
                    </Link>
                  </div>
                </HoverColor>
              </div>
            </div>
          </div>
        </section>
      </SlideInFromLeft>
    </LazyMotion>
  );
};

export default Services;
