/**
 * # MapPinSVG component
 * > This is an inline SVG as a component
 *---
 * @example
 * ```tsx
 * <MapPinSVG />
 * ```
 */
export const MapPinSVG = ({
  width = '25',
  height = '25',
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '1.6',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

MapPinSVG.displayName = 'MapPinSVG';
