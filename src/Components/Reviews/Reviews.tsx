import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.scss";
import Image from "next/image";

const reviews = [
  {
    quote:
      "Aenean commodo ligula eget dolororem ipsum dolor sit amet, consectetuer adipiscing elit...",
    author: "CYNTHIA FOWLER",
    role: "Designer",
  },
  {
    quote: "A Great Class for the Day, consectetuer adipiscing elit...",
    author: "FELLA CUTIE",
    role: "Designer",
  },
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextReview, 6000); // Switch every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]); // We re-run the effect every time currentIndex changes
  const goToNextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const review = reviews[currentIndex];

  return (
    <div className={`${styles.reviewSliderContainer} text-white mt-20`}>
      <div className={`${styles.leftFlower}`}></div>
      <Image
        src={"/Yoga-Photos/testimonials-quote.png"}
        alt={"picture of quote"}
        height={"80"}
        width={"80"}
        className={`${styles.quotePNG}`}
      />
      <div className={`${styles.reviewContent}`}>
        <h2 className={`${styles.heading} mt-40`}>HAPPY CUSTOMERS</h2>
        <p className={`${styles.quote}`}>{review.quote}</p>
        <h3 className={`${styles.author}`}>{review.author}</h3>
        <h4 className={`${styles.role} text-sm`}>{review.role}</h4>
        <button className={`${styles.button}`} onClick={goToNextReview}>
          Next
        </button>
      </div>
      <div className={`${styles.rightFlower}`}></div>
    </div>
  );
};

export default ReviewSlider;
