import { useEffect, useRef, useState } from "react";

export default function useHeaderProps() {
  const [open, setOpen] = useState(false);
  const [indexItem, setIndexItem] = useState(0);
  const dropdownRef = useRef(null);

  const handleClick = () => setOpen(!open);

  const handleChange = (index) => {
    setIndexItem(index);
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { open, handleClick, handleChange, dropdownRef, indexItem };
}
