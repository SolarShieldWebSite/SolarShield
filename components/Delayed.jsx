import { useEffect, useState } from "react";

export default function Delayed({ children, waitBeforeShow = 300 }) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : null;
}
