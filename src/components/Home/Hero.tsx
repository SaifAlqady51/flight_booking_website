import { FC, RefObject, useRef } from 'react'
import { HeroStyles } from '@/styles/HomeStyles/Hero.styles'
import {motion, useMotionValue, useMotionValueEvent, useScroll} from 'framer-motion'
import { useTransform } from 'framer-motion'
interface HeroProps {
  
}

type UseScrollOptions = {
  target:RefObject<HTMLHeadingElement>,
  offset:string[]
}



const Hero: FC<HeroProps> = ({}) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target:targetRef,
    // @ts-ignore
    offset: ["end end","end start"],
  }) 

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })




  return(
      <HeroStyles as={motion.h2} initial={{x:0}}    ref={targetRef}>Book your flight in one minute</HeroStyles>
  )
}

export default Hero