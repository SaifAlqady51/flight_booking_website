import { FC } from 'react'
import { PlaneIconContainer, PlaneIconStyled } from '@/styles/HomeStyles/PlaneIcon.styled'
import horizotalPlane from '../../../public/horizontalPlane.png'
import Image from 'next/image'
import { motionValue,animate } from 'framer-motion'


interface PlaneIconProps  {

}



const PlaneIcon: FC<PlaneIconProps> = ({}) => {
  const x = motionValue(0)
  return(
    // wrap the Image with div because framer motion does not work with Image
    <PlaneIconContainer initial={{x:-1100}} animate={{x:1100}} transition={{type:'spring',duration:9}}>
      <PlaneIconStyled  src={horizotalPlane} alt='plane-icon'/>
    </PlaneIconContainer>
  )

}

export default PlaneIcon

//initial={{x:-1100}} animate={{x:1100}} transition={{type:'spring',duration:9}}