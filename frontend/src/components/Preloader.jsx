import React, { useState, useEffect } from "react";
import { LOGO } from "../mock";

// Full-screen splash shown once on first site load. The crest performs a smooth
// ease-out Y-axis flip for ~1.5s, then the overlay fades out and unmounts.
export const Preloader = () => {
  const [hide, setHide] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 1600);
    const t2 = setTimeout(() => setRemove(true), 2150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (remove) return null;

  return (
    <div
      className={`preloader-overlay ${hide ? "hide" : ""}`}
      data-testid="preloader"
    >
      <div className="logo-perspective" style={{ width: 140, height: 140 }}>
        <img
          src={LOGO}
          alt="Coast Guard Kindergarten"
          draggable="false"
          className="logo-3d logo-flip-once w-full h-full object-contain select-none"
        />
      </div>
      <div className="mt-5 text-center">
        <div className="font-display font-extrabold text-[var(--brand-navy)] tracking-wide text-lg">
          COAST GUARD KINDERGARTEN
        </div>
        <div className="font-display font-semibold text-[11px] tracking-[0.3em] text-[var(--brand-indigo)] mt-1">
          POWAI
        </div>
      </div>
    </div>
  );
};

export default Preloader;
