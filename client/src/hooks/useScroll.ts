import React, { useEffect, useRef } from 'react';


export const useScroll = (downloadData: Function, lastVisibleElementRef: React.RefObject<HTMLElement | null>) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(async ([target]) => {
            if (target.isIntersecting) {
                await downloadData();
            }
        });

        if (lastVisibleElementRef.current) {
            observer.current.observe(lastVisibleElementRef.current);
        }

        return () => {
            if (lastVisibleElementRef.current) {
                observer.current?.unobserve(lastVisibleElementRef.current);
            }
        };
    }, [downloadData]);
};