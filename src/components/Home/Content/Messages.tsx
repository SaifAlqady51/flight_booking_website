import { FC } from 'react';
import Image from 'next/image'
import { MainDiv,ChildDiv,GrandChildDiv } from '@/styles/HomeStyles/ContentStyles/Messages.styles';
import spiningWorld from '../../../../public/giphy.gif';
import purpleSky from '../../../../public/pruple-sky.gif'
import { MessageImage } from '@/styles/HomeStyles/ContentStyles/MessageImage';
interface MessagesProps {
  
}

const Messages: FC<MessagesProps> = ({}) => {
  return (
    <>
        <MainDiv>
            <ChildDiv>

                <GrandChildDiv order='2' width='30%'>
                    <MessageImage src={spiningWorld} height={400} widthMobile='366px' alt='spinning-earth'/>
                </GrandChildDiv>

                <GrandChildDiv order='1' text={true} width='70%' >
                    <h2>Explore the world with us</h2>
                    <h4>It is all about one click to discover new opportunities, see the world and have fun</h4>
                </GrandChildDiv>


            </ChildDiv>
        </MainDiv>
        <MainDiv>
            <ChildDiv>
        
                <GrandChildDiv text={true} width='40%'>
                    <h2>Touch the sky where your dreams belong</h2>
                    <h4>Fly with your dreams </h4>
                </GrandChildDiv>

                <GrandChildDiv width='60%' justify='end'>
                    <MessageImage src={purpleSky} height={400} heightMobile='200px' alt='purple-sky'/>
                </GrandChildDiv>

            </ChildDiv>
        </MainDiv>
    </>
  )
}

export default Messages