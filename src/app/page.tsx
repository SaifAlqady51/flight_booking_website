'use client'
import Hero from "@/components/Home/Hero";
import { HomeContainer } from "@/styles/HomeStyles/HomeContainer";
import PlaneIcon from "@/components/Home/PlaneIcon";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <PlaneIcon />
        <Hero />

      </HomeContainer>
    </>
  )
}
