import { FC } from 'react';
import {
    PlaneIconContainer,
    PlaneIconStyled,
} from '@/styles/HomeStyles/HeroStyles/PlaneIcon.styled';
import horizotalPlane from '@public/static/images/paper-plane-purple.png';

interface PlaneIconProps {}

const PlaneIcon: FC<PlaneIconProps> = () => {
    // calculat the width of the screen
    const width: number = window.innerWidth;


    return (
        // wrap the Image with div because framer motion does not work with Image
        <PlaneIconContainer
            initial={{ x: -width, rotate: 45 }}
            animate={{ x: width }}
            transition={{ type: 'spring', duration: width / 150 }}
        >
            <PlaneIconStyled src={horizotalPlane} alt='plane-icon' />
        </PlaneIconContainer>
    );
};

export default PlaneIcon;

