'use client';
import { FC } from 'react';
import {
    MainDiv,
    ChildDivTop,
    ChildDivBottom,
    GrandChildDivTop,
    GrandChildDivBottom,
} from '@/styles/HomeStyles/ContentStyles/Messages.styles';
import spiningWorld from '@public/static/images/giphy.gif';
import purpleSky from '@public/static/images/pruple-sky.gif';
import { MessageImage } from '@/styles/HomeStyles/ContentStyles/MessageImage';

const Messages: FC = () => {
    const DivAnimation = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: { y: 0, opacity: 1 },
    };
    return (
        <>
            <MainDiv>
                <ChildDivTop>
                    <GrandChildDivTop
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        variants={DivAnimation}
                        transition={{ duration: 2 }}
                        order='2'
                        width='30%'
                        widthRes='45%'
                    >
                        <MessageImage
                            src={spiningWorld}
                            height={400}
                            heightMobile='440px'
                            alt='spinning-earth'
                        />
                    </GrandChildDivTop>

                    <GrandChildDivTop
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        variants={DivAnimation}
                        order='1'
                        transition={{ duration: 2 }}
                        text={true}
                        width='70%'
                        widthRes='60%'
                    >
                        <h2>Explore the world with us</h2>
                        <h4>
                            It is all about one click to discover new
                            opportunities, see the world and have fun
                        </h4>
                    </GrandChildDivTop>
                </ChildDivTop>

                <ChildDivBottom>
                    <GrandChildDivBottom
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        variants={DivAnimation}
                        transition={{ duration: 2 }}
                        text={true}
                        width='40%'
                        widthRes='30%'
                    >
                        <h2>Touch the sky where your dreams belong</h2>
                        <h4>Fly with your dreams </h4>
                    </GrandChildDivBottom>

                    <GrandChildDivBottom
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        variants={DivAnimation}
                        transition={{ duration: 2 }}
                        width='60%'
                        widthRes='40%'
                        align='end'
                    >
                        <MessageImage
                            src={purpleSky}
                            height={400}
                            widthMobileSmall='400px'
                            widthMobile='700px'
                            widthTab='600px'
                            alt='purple-sky'
                        />
                    </GrandChildDivBottom>
                </ChildDivBottom>
            </MainDiv>
        </>
    );
};

export default Messages;
