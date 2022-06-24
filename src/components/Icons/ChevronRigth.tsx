import React from "react";

export const ChevronRight = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    height={24}
    width={24}
    {...props}
    viewBox="0 0 24 24"
  >
    <path fill={props.fill ? props.fill : "#000"} id="43i2j2l8ya" d="M15.7 12.7l-6 6c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l5.3-5.3-5.3-5.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6 6c.4.4.4 1 0 1.4z" />
  </svg>
);
