'use client';
import * as React from 'react';
import Turbine from '@public/static/images/turbine.png';
import {
    LoadingStyles,
    AirPlaneEngineImage,
    AirPlaneImageContainer,
} from '@/styles/LoadingPage-styles';
export default function LoadingPage() {
    return (
        <LoadingStyles>
            <AirPlaneImageContainer
                animate={{ rotate: 10800 }}
                transition={{ repeat: Infinity, duration: 80 }}
            >
                <AirPlaneEngineImage
                    src={Turbine}
                    alt='turbine'
                ></AirPlaneEngineImage>
            </AirPlaneImageContainer>
        </LoadingStyles>
    );
}
