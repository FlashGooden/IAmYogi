import React from "react";
import { domAnimation, LazyMotion } from "framer-motion";
import { SlideInFromRight } from "../../../utils/SlideInFromRight";
import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <LazyMotion features={domAnimation}>
      <SlideInFromRight>
        <section id="cards" className={"mt-28"}>
          <div className={"grid lg:grid-cols-3 justify-items-center"}>
            <div className={"card-1 grid justify-items-center mt-24"}>
              <div className={`card-icon ${styles.tear}`}></div>
              <h3 className={"card-heading text-black font-medium mt-6"}>
                DISCOVER POSSIBLE
              </h3>
              <p className={"text-black text-center text-stone-400 p-10"}>
                Lorem gravida nibh vel velit auctor aliquet. Aenean sollicitudin
                qui lorem quis bibendum auci elit velit conse.
              </p>
            </div>
            <div className={"card-2 grid justify-items-center mt-24"}>
              <div className={`card-icon ${styles.tear}`}></div>
              <h3 className={"card-heading text-black font-medium mt-6"}>
                PEOPLE MATTER
              </h3>
              <p className={"text-black text-center text-stone-400 p-10"}>
                Lorem gravida nibh vel velit auctor aliquet. Aenean sollicitudin
                qui lorem quis bibendum auci elit velit conse.
              </p>
            </div>
            <div className={"card-3 grid justify-items-center mt-24"}>
              <div className={`card-icon ${styles.tear}`}></div>
              <h3 className={"card-heading text-black font-medium mt-6"}>
                FEELING GOOD
              </h3>
              <p className={"text-black text-center text-stone-400 p-10"}>
                Lorem gravida nibh vel velit auctor aliquet. Aenean sollicitudin
                qui lorem quis bibendum auci elit velit conse.
              </p>
            </div>
          </div>
        </section>
      </SlideInFromRight>
    </LazyMotion>
  );
};

export default Cards;
