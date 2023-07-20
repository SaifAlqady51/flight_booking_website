import styled from 'styled-components';
// import TyaraIcon from '@/components/TyaraIcon';
import Image from 'next/image'

export const TayaraIcon = styled(Image)`
    width:45px;
    height:45px;

    @media (max-width:500px){
        width:35px;
        height:35px;
    }
`