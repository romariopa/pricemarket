import React from "react";

export const ChevronDown = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    className={props.className}
    height={props.height || 24}
    width={props.width || 24}
    viewBox={`0 0 24 24`}
  >
    <path
      fill={props.fill ? props.fill : "#000"}
      d="M18.7 9.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
    />
  </svg>
);
