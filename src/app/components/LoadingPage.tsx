'use client';

import { useRouteChange } from 'nextjs13-router-events';

export default function LoadingPage() {
    useRouteChange({
        onRouteChangeStart: () => {
            console.log('onStart');
        },
        onRouteChangeComplete: () => {
            console.log('onChange');
        },
    });
}
