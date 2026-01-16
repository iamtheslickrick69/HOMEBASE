/**
 * Atlas AI Logo - Neural Network Map + Medical Cross
 * Represents AI-powered health mapping with connected intelligence
 */

interface AtlasLogoProps {
  className?: string
  size?: number
  variant?: "full" | "icon" | "wordmark"
  showText?: boolean
}

export function AtlasLogo({ className, size = 120, variant = "full", showText = true }: AtlasLogoProps) {
  // Scale factor for responsive sizing
  const scale = size / 120

  if (variant === "wordmark") {
    return (
      <div className={className} style={{ width: size * 1.5 }}>
        <svg
          width={size * 1.5}
          height={size * 0.4}
          viewBox="0 0 180 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0"
            y="36"
            fill="white"
            fontSize="32"
            fontWeight="300"
            letterSpacing="0.05em"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            ATLAS
          </text>
          <text
            x="120"
            y="36"
            fill="#22d3ee"
            fontSize="32"
            fontWeight="500"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            AI
          </text>
        </svg>
      </div>
    )
  }

  return (
    <div className={className} style={{ width: variant === "icon" ? size : size * 2 }}>
      <svg
        width={variant === "icon" ? size : size * 2}
        height={size}
        viewBox={variant === "icon" ? "0 0 120 120" : "0 0 240 120"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for nodes */}
          <radialGradient id="node-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
          </radialGradient>

          {/* Glow effect for center node */}
          <filter id="node-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Neural network icon */}
        <g transform={variant === "icon" ? "translate(10, 10)" : "translate(10, 10)"}>
          {/* Connection lines (neural network) */}
          <g opacity="0.4">
            {/* Center to outer nodes */}
            <line x1="50" y1="50" x2="20" y2="20" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="80" y2="20" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="90" y2="50" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="80" y2="80" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="20" y2="80" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="10" y2="50" stroke="#22d3ee" strokeWidth="1.5" />

            {/* Mid-layer connections */}
            <line x1="50" y1="50" x2="50" y2="15" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="50" y1="50" x2="50" y2="85" stroke="#22d3ee" strokeWidth="1.5" />

            {/* Outer node interconnections (subtle) */}
            <line x1="20" y1="20" x2="50" y2="15" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />
            <line x1="80" y1="20" x2="50" y2="15" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />
            <line x1="80" y1="80" x2="90" y2="50" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />
            <line x1="20" y1="80" x2="10" y2="50" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />
          </g>

          {/* Outer nodes (small) */}
          <circle cx="20" cy="20" r="4" fill="url(#node-gradient)" />
          <circle cx="80" cy="20" r="4" fill="url(#node-gradient)" />
          <circle cx="90" cy="50" r="4" fill="url(#node-gradient)" />
          <circle cx="80" cy="80" r="4" fill="url(#node-gradient)" />
          <circle cx="20" cy="80" r="4" fill="url(#node-gradient)" />
          <circle cx="10" cy="50" r="4" fill="url(#node-gradient)" />
          <circle cx="50" cy="15" r="4" fill="url(#node-gradient)" />
          <circle cx="50" cy="85" r="4" fill="url(#node-gradient)" />

          {/* Center node (larger, with glow) */}
          <circle cx="50" cy="50" r="18" fill="#0e7490" opacity="0.2" filter="url(#node-glow)" />
          <circle cx="50" cy="50" r="16" fill="url(#node-gradient)" />

          {/* Medical cross in center (white) */}
          <g transform="translate(50, 50)">
            {/* Vertical bar */}
            <rect x="-1.5" y="-8" width="3" height="16" rx="0.5" fill="white" />
            {/* Horizontal bar */}
            <rect x="-8" y="-1.5" width="16" height="3" rx="0.5" fill="white" />
          </g>

          {/* Subtle EKG pulse on one connection */}
          <path
            d="M 50 50 L 58 50 L 62 42 L 66 58 L 70 50 L 90 50"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Text (for full variant) */}
        {variant === "full" && showText && (
          <g transform="translate(125, 0)">
            <text
              x="0"
              y="50"
              fill="white"
              fontSize="36"
              fontWeight="300"
              letterSpacing="0.08em"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              ATLAS
            </text>
            <text
              x="0"
              y="80"
              fill="#22d3ee"
              fontSize="20"
              fontWeight="400"
              letterSpacing="0.15em"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              AI
            </text>
            <text
              x="38"
              y="80"
              fill="#737373"
              fontSize="12"
              fontWeight="300"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              Map out your health
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}

export default AtlasLogo
