import { useState } from 'react';
import useResize from './useResize';

// Define a custom hook to get the window dimensions
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useResize(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowDimensions;
}
