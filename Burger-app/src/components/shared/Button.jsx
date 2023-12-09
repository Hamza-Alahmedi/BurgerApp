import React from "react";

export default function Button({ className, onClick, displayText }) {
  return (
    <button className={className} onClick={onClick}>
      {displayText}
    </button>
  );
}
