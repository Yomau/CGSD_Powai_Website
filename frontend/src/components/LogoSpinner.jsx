import React from "react";
import { LOGO } from "../mock";

// Reusable loading indicator: the crest logo spinning continuously on its Y-axis.
// Drop it anywhere a "loading" state is needed (form submits, page transitions, data fetch).
export const LogoSpinner = ({ size = 64, label = "Loading...", className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      role="status"
      aria-live="polite"
      data-testid="logo-spinner"
    >
      <div className="logo-perspective" style={{ width: size, height: size }}>
        <img
          src={LOGO}
          alt=""
          draggable="false"
          className="logo-3d logo-flip-loop w-full h-full object-contain select-none"
        />
      </div>
      {label && (
        <span className="text-sm font-semibold text-[var(--brand-navy)]">{label}</span>
      )}
      <span className="sr-only">Loading</span>
    </div>
  );
};

export default LogoSpinner;
