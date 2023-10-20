'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Messages_styles_1 = require("@/styles/HomeStyles/ContentStyles/Messages.styles");
var giphy_gif_1 = require("@public/static/images/giphy.gif");
var pruple_sky_gif_1 = require("@public/static/images/pruple-sky.gif");
var MessageImage_1 = require("@/styles/HomeStyles/ContentStyles/MessageImage");
var Messages = function (_a) {
    var DivAnimation = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: { y: 0, opacity: 1 },
    };
    return (<>
            <Messages_styles_1.MainDiv>
                <Messages_styles_1.ChildDivTop>
                    <Messages_styles_1.GrandChildDivTop initial={'offscreen'} whileInView={'onscreen'} variants={DivAnimation} transition={{ duration: 2 }} order='2' width='30%' widthRes='45%'>
                        <MessageImage_1.MessageImage src={giphy_gif_1.default} height={400} heightMobile='440px' alt='spinning-earth'/>
                    </Messages_styles_1.GrandChildDivTop>

                    <Messages_styles_1.GrandChildDivTop initial={'offscreen'} whileInView={'onscreen'} variants={DivAnimation} order='1' transition={{ duration: 2 }} text={true} width='70%' widthRes='60%'>
                        <h2>Explore the world with us</h2>
                        <h4>
                            It is all about one click to discover new
                            opportunities, see the world and have fun
                        </h4>
                    </Messages_styles_1.GrandChildDivTop>
                </Messages_styles_1.ChildDivTop>

                <Messages_styles_1.ChildDivBottom>
                    <Messages_styles_1.GrandChildDivBottom initial={'offscreen'} whileInView={'onscreen'} variants={DivAnimation} transition={{ duration: 2 }} text={true} width='40%' widthRes='30%'>
                        <h2>Touch the sky where your dreams belong</h2>
                        <h4>Fly with your dreams </h4>
                    </Messages_styles_1.GrandChildDivBottom>

                    <Messages_styles_1.GrandChildDivBottom initial={'offscreen'} whileInView={'onscreen'} variants={DivAnimation} transition={{ duration: 2 }} width='60%' widthRes='40%' align='end'>
                        <MessageImage_1.MessageImage src={pruple_sky_gif_1.default} height={400} widthMobileSmall='400px' widthMobile='700px' widthTab='600px' alt='purple-sky'/>
                    </Messages_styles_1.GrandChildDivBottom>
                </Messages_styles_1.ChildDivBottom>
            </Messages_styles_1.MainDiv>
        </>);
};
exports.default = Messages;
