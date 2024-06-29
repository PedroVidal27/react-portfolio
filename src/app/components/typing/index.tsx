import { useEffect, useState } from "react";
import "./styles.css"

interface Props {
  text: string;
  delay: number;
}

const Typewritter: React.FC<Props> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className="blinking-cursor">{currentText}</span>;
};

export default Typewritter;
