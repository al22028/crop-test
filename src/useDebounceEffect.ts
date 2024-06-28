import { useEffect, DependencyList } from 'react'

export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps?: DependencyList,
) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn(...deps);
    }, waitTime);
  
    return () => {
      clearTimeout(t);
    };
  }, [fn, waitTime, ...deps]);
}