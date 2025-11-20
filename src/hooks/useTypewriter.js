import { useState, useEffect } from "react";

export default function useTypewriter(words, speed = 90, delay = 1500) {
  const [index, setIndex] = useState(0);         
  const [subIndex, setSubIndex] = useState(0);    
  const [reverse, setReverse] = useState(false);  

  useEffect(() => {
    if (index === words.length) return;

    if (!reverse && subIndex === words[index].length) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return words[index].substring(0, subIndex);
}
