import { FC, RefObject, useRef } from 'react'
import { HeroStyles } from '@/styles/HomeStyles/Hero.styles'
import {motion,  useMotionValueEvent, useScroll} from 'framer-motion'
interface HeroProps {
  
}

type UseScrollOptions = {
  target:RefObject<HTMLHeadingElement>,
  offset:string[]
}



const Hero: FC<HeroProps> = ({}) => {

  const targetRef = useRef<HTMLDivElement>(null)



  return(
      <HeroStyles as={motion.h2} ref={targetRef} initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1,delay:1}}  >Book your flight in one minute</HeroStyles>
  )
}

export default Hero