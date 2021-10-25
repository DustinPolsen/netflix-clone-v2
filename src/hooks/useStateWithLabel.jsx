import { useDebugValue, useRef, useState } from 'react';

export const useStateWithLabel = (initialValue, label = 'state') => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${label}: ${value}`);
  return [value, setValue];
};

export const useRefWithLabel = (initialValue, label = 'ref') => {
  const ref = useRef(initialValue);
  useDebugValue(`${label}: ${ref.current}`);
  return ref;
};
