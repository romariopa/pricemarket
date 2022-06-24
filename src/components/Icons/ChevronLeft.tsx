import React from "react";

export const ChevronLeft = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
    <svg
        height={ 24 }
        width={ 24 }
        viewBox="0 0 24 24"
        { ...props }
    >
        <path fill={ props.fill ? props.fill : "#000" } d="M15.7 17.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L10.4 12l5.3 5.3z" />
    </svg>
);