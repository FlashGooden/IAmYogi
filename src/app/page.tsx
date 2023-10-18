"use client";
import Hero from "@/Components/Hero/Hero";
import Navigation from "@/Components/Navigation/Navigation";
import Services from "@/Components/Services/Services";
import React, { Suspense } from "react";
import withLazyLoad from "../../utils/withLazyLoad";
import About from "@/Components/About/About";
import Cards from "@/Components/Cards/Cards";
import Reviews from "@/Components/Reviews/Reviews";

const ServicesWithLazyLoad = withLazyLoad(Services);
const AboutWithLazyLoad = withLazyLoad(About);
const CardsWithLazyLoad = withLazyLoad(Cards);
const ReviewsWithLazyLoad = withLazyLoad(Reviews);

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
      <Navigation />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <ServicesWithLazyLoad />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutWithLazyLoad />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CardsWithLazyLoad />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ReviewsWithLazyLoad />
      </Suspense>
      <footer id="footer" className="footer"></footer>
    </main>
  );
}
