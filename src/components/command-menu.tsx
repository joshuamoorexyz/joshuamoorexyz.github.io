"use client";

import * as React from "react";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <footer className="absolute bottom-0 left-0 right-0 border-t border-t-muted bg-white p-2 text-center text-base text-muted-foreground">
        &copy; {currentYear} Joshua J. Moore
      </footer>
    </>
  );
};
