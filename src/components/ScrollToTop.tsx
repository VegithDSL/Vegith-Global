import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // If URL has hash, let section scrolling handle it
    if (window.location.hash) return;

    window.scrollTo({
      top: 1,
      left: 0,
      behavior: "auto",
    });
  }, [location]);

  return null;
}