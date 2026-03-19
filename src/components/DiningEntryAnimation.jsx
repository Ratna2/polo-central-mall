import { useEffect, useState } from "react";

export default function DiningEntryAnimation({ logo }) {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  if (!visible) return null;

  return (
    <div className="entry-animation">
      <img src={logo} alt="brand logo" />
    </div>
  );
}