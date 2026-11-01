import * as React from "react";

export interface TrashCanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  title?: string;
}

export const TrashCan = React.forwardRef<SVGSVGElement, TrashCanProps>(
  ({ size = 24, strokeWidth = 2, title, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 6h18" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M5.5 6l1 13.2A2 2 0 0 0 8.5 21h7a2 2 0 0 0 2-1.8L18.5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  )
);

TrashCan.displayName = "TrashCan";

export default TrashCan;