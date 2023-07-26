import { FC, RefObject, useRef } from 'react'
import { HeroStyles } from '@/styles/HomeStyles/Hero.styles'
import {motion, useMotionValue, useScroll} from 'framer-motion'
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

  const animation = useTransform(scrollYProgress, [0,1],[0,360],{clamp:false});

  return(
      <HeroStyles as={motion.h2} initial={{x:0}} animate={{x:300}}  style={{animation}}  ref={targetRef}>Book your flight in one minute</HeroStyles>
  )
}

export default Hero