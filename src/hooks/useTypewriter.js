import { useState, useEffect } from "react";

export default function useTypewriter(words, speed = 90, delay = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[index];
    let timeoutId;

    if (!reverse && subIndex === currentWord.length) {
      timeoutId = setTimeout(() => setReverse(true), delay);
    } else if (reverse && subIndex === 0) {
      timeoutId = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, speed);
    } else {
      timeoutId = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, reverse ? Math.max(40, speed / 2) : speed);
    }

    return () => clearTimeout(timeoutId);
  }, [delay, index, reverse, speed, subIndex, words]);

  if (!words.length) return "";

  return words[index].substring(0, subIndex);
}
