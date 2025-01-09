import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center">
      <span className="loader p-12"></span>;
    </div>
  );
}

export function FullPageSpinner() {
  return (
    <div className="flex h-screen justify-center items-center backdrop-blur-xl bg-white/30">
      <span className="loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      ;
    </div>
  );
}

export default Spinner;
