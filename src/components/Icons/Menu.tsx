import React from "react";

export const Menu = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      id="menu"
      fill={props.fill || "#000"}
      d="M22 12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1zM3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zm18 10H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1z"
    />
  </svg>
);
