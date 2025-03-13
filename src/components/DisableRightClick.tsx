"use client";

import React, { useEffect } from "react";

export default function DisableRightClick() {
  useEffect(() => {
    const disableClick = (e: MouseEvent) => {
      if (e.button === 0 || e.button === 2) {
        e.preventDefault();
      }
    };

    const handleCtrlKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableClick);
    document.addEventListener("mousedown", disableClick);
    document.addEventListener("keydown", handleCtrlKeyPress);

    return () => {
      document.removeEventListener("contextmenu", disableClick);
      document.removeEventListener("mousedown", disableClick);
      document.removeEventListener("keydown", handleCtrlKeyPress);
    };
  }, []);

  return null;
}
