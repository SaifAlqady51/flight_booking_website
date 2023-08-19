import { FC } from 'react'
import { PlaneIconContainer, PlaneIconStyled } from '@/styles/HomeStyles/HeroStyles/PlaneIcon.styled'
import horizotalPlane from '../../../../public/static/images/paper-plane-purple.png'
import { motionValue } from 'framer-motion'


interface PlaneIconProps  {

}



const PlaneIcon: FC<PlaneIconProps> = ({}) => {
  // calculat the width of the screen
  const width: number = window.innerWidth

  const x = motionValue(0)

  return(
    // wrap the Image with div because framer motion does not work with Image
    <PlaneIconContainer initial={{x:-width,rotate:45}} animate={{x:width}} transition={{type:'spring',duration: width / 150}}>
      <PlaneIconStyled  src={horizotalPlane} alt='plane-icon'/>
    </PlaneIconContainer>
  )

}

export default PlaneIcon

//initial={{x:-1100}} animate={{x:1100}} transition={{type:'spring',duration:9}}
