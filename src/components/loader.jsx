import { useEffect, useState } from "react";
import "./loader.css";

const TEXT = "Vaibhav's portfolio";
const TYPE_SPEED = 60; // ms per char
const MIN_DURATION = 1500; // ms

export default function Loader({ onFinish }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const typeInterval = setInterval(() => {
      setDisplayed(TEXT.slice(0, i + 1));
      i++;
      if (i === TEXT.length) clearInterval(typeInterval);
    }, TYPE_SPEED);

    const minTimer = setTimeout(() => {
      onFinish?.();
    }, Math.max(MIN_DURATION, TEXT.length * TYPE_SPEED));

    return () => {
      clearInterval(typeInterval);
      clearTimeout(minTimer);
    };
  }, [onFinish]);

  return (
    <div className="loader-screen" role="status" aria-live="polite">
      <h1 className="typewriter">
        {displayed}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}
