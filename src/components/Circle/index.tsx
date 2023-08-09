import React from "react";

interface Props {
  className: string;
}

function Circle({ className }: Props) {
  return <div className={className}></div>;
}

export default Circle;
