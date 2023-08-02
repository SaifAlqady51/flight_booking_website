import styled from 'styled-components';
import Image from 'next/image'
interface MessageImageProps {
    heightMobile?:string,
    widthMobile?:string
}

export const MessageImage = styled(Image)<MessageImageProps>`
    border-radius: 30px;

    @media (max-width:640px){
        height:${(props) => props.heightMobile};
        width:${(props) => props.widthMobile};

    }

`