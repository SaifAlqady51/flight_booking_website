'use client'
import Hero from "@/components/Home/Hero/Hero";
import { HomeContainer } from "@/styles/HomeStyles/HomeContainer";
import PlaneIcon from "@/components/Home/Hero/PlaneIcon";
import HeroImage from "@/components/Home/Hero/HeroImage";
import Card from "@/components/Home/Content/Card";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <PlaneIcon />
        <Hero />
        <HeroImage />
        <Card />
      </HomeContainer>
    </>
  )
}
