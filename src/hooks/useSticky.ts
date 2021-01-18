/**
 * This hook is to provide a way any HTML element can stick to the page based on
 * the page scroll
 */

import React, { useState, useEffect, useRef } from 'react';

// return type of useSticky
interface useStickyData<T> {
  isSticky: boolean; // true if user scrolls more than the element distance from parent
  elementRef: React.RefObject<T>; // the HTML element to keep tracking the distance from parent
}

function useSticky<T extends HTMLElement>(): useStickyData<T> {
  const [isSticky, setSticky] = useState(false);
  const elementRef = useRef<T>(null);

  // updates the state based on whether the HTML element offset is lesser than the
  // amount of scrolling the user has performed
  const handleScroll = (): void => {
    if (elementRef.current) {
      if (window.scrollY > elementRef.current.offsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  // as the scroll event is fired at high rate, try to avoid updating the
  // state at higher rate
  const throttleScroll = (func: { (): void }, wait = 5000) => {
    let timeOut = -1;
    const callNow = timeOut < 0;

    if (timeOut > 0) clearTimeout(timeOut);
    timeOut = window.setTimeout(() => {
      timeOut = -1;
    }, wait);

    if (callNow) func();
  };

  // as soon as this useStick is called...
  useEffect(() => {
    window.addEventListener('scroll', () => {
      throttleScroll(handleScroll);
    });

    // upon removing this hook, remove the listener for the scroll
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return { isSticky, elementRef };
}

export default useSticky;
