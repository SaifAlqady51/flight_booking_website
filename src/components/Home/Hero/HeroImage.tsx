import { FC } from 'react'
import { HeroImageContainer,HeroImageStyled } from '@/styles/HomeStyles/HeroStyles/HeroImage.styles'
import planeWindow from '../../../../public/planeWindow.gif'

interface HeroImageProps {
  
}

const HeroImage: FC<HeroImageProps> = ({}) => {
  return(
    <>
        <HeroImageContainer initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:2}}> 
          <HeroImageStyled src={planeWindow} alt='plane-window'/>
        </HeroImageContainer>
    </>
  )
}

export default HeroImage