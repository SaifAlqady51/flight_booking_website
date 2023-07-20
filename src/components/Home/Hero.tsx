import { FC } from 'react'
import { HeroStyles } from '@/styles/HomeStyles/Hero.styles'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
  return <>
    <HeroStyles>Book your flight in one minute</HeroStyles>
  </>
}

export default Hero