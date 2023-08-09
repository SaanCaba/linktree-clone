// import React from "react";

// function Circle() {
//   return (
//     <div className="w-[50px] h-[50px] bg-black absolute rounded-full top-[50px] left-[120px]"></div>
//   );
// }

// export default Circle;
import React from "react";

interface Props {
  className: string;
}

function Circle({ className }: Props) {
  return <div className={className}></div>;
}

export default Circle;
