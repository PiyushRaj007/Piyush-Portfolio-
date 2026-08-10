// A recurring hand-set "hydrograph" line — a nod to the time-series water-quality
// trends analyzed in the CPCB internship. Used sparingly as the site's signature motif.

export default function DataThread({ className = '', color = '#3FBFA6', points, animate = true }) {
  const defaultPoints = '0,60 60,42 120,55 180,20 240,38 300,12 360,30 420,8'
  const d = points || defaultPoints

  return (
    <svg
      className={className}
      viewBox="0 0 420 70"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polyline
        points={d}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          animate
            ? {
                strokeDasharray: 900,
                strokeDashoffset: 900,
                animation: 'dash 2.4s ease-out forwards',
              }
            : undefined
        }
      />
    </svg>
  )
}
