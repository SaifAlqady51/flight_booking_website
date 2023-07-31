'use client'
import Hero from "@/components/Home/Hero";
import { HomeContainer } from "@/styles/HomeStyles/HomeContainer";
import PlaneIcon from "@/components/Home/PlaneIcon";
import HeroImage from "@/components/Home/HeroImage";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <PlaneIcon />
        <Hero />
        <HeroImage />

      </HomeContainer>
    </>
  )
}
