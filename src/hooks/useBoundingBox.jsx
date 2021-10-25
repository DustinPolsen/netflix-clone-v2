import { useRef, useState, useEffect } from 'react';
import { debounce } from '@/utils/debounce';

const useBoundingBox = (querySelectedElement, dependencies = []) => {
  // Our `ref` is needed to be passed to the component's `ref` attribute.
  // $FlowFixMe
  const ref = useRef(null);

  // We're using `useRef` for our boundingBox just as an instance variable.
  // Some bit of mutable state that doesn't require re-renders.
  const [boundingBox, rawSetBoundingBox] = useState(null);

  const setBoundingBox = (elementRef) => {
    if (!querySelectedElement) {
      rawSetBoundingBox(elementRef.current?.getBoundingClientRect());
      return;
    }

    rawSetBoundingBox(
      elementRef.current
        ?.querySelector(querySelectedElement)
        ?.getBoundingClientRect()
    );
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setBoundingBox(ref);
  }, dependencies); // eslint-disable-line

  // We want to re-capture the bounding box whenever the user scrolls or
  // resizes the window.
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const recalculate = debounce(() => {
      if (ref.current) {
        setBoundingBox(ref);
      }
    }, 250);

    window.addEventListener('scroll', recalculate);
    window.addEventListener('resize', recalculate);

    return () => {
      window.removeEventListener('scroll', recalculate);
      window.removeEventListener('resize', recalculate);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, boundingBox];
};

export default useBoundingBox;
