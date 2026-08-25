import React from "react";
import HeroSlider from "../components/HeroSlider";
import QuickLinks from "../components/QuickLinks";
import { AboutSection, VMVSection, PrincipalSection } from "../components/HomeSections";
import { GallerySection, NewsSection } from "../components/NewsGallery";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <QuickLinks />
      <AboutSection />
      <VMVSection />
      <PrincipalSection />
      <GallerySection />
      <NewsSection />
    </main>
  );
}
