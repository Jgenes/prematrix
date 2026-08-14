"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollingElement = window.document.scrollingElement;
    if (scrollingElement) {
      scrollingElement.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return null;
}
