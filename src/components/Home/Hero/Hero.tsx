import { FC, RefObject, useRef } from 'react'
import { HeroStyles } from '@/styles/HomeStyles/HeroStyles/Hero.styles'
import {motion,  useMotionValueEvent, useScroll} from 'framer-motion'

interface HeroProps {
  
}



const Hero: FC<HeroProps> = ({}) => {

  // const targetRef = useRef<HTMLDivElement>(null)



  return(
    <>
		<HeroStyles as={motion.h2} initial={{y:-100, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:2}}  >Book your flight in one minute</HeroStyles>
    </>

  )
}

export default Hero
