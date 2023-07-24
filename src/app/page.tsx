'use client'
import Hero from "@/components/Home/Hero";
import Navbar from "../components/Nav/Navbar";
import { HomeContainer } from "@/styles/HomeStyles/HomeContainer";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Hero></Hero>
      </HomeContainer>
    </>
  )
}
