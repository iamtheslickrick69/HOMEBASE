'use client';

import { cn } from '@/lib/utils';
import React, { useMemo } from 'react';
import { PixelCanvas } from './pixel-canvas';

type FeatureType = {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
    badge?: string;
    badgeColor?: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
    feature: FeatureType;
    patternSeed?: number;
};

// Color configs for PixelCanvas - Grayscale only
const pixelColors = {
    gray: ["#9ca3af", "#d1d5db", "#e5e7eb"],
};

export function FeatureCard({ feature, className, patternSeed = 0, ...props }: FeatureCardProps) {
    const colorKey = "gray" as const;

    return (
        <div className={cn('relative overflow-hidden p-6', className)} {...props}>
            <PixelCanvas
                gap={10}
                speed={20}
                colors={pixelColors[colorKey]}
                variant="default"
                noFocus
            />
            <div className="relative z-10">
                {/* Horizontal Header Row */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl backdrop-blur-sm bg-gray-500/20 text-gray-300">
                            <feature.icon className="w-5 h-5" strokeWidth={1.5} aria-hidden />
                        </div>
                        <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                    </div>
                    {feature.badge && (
                        <span className="text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm bg-gray-500/20 text-gray-300">
                            {feature.badge}
                        </span>
                    )}
                </div>
                <p className="text-neutral-400 font-medium relative z-20 text-sm leading-relaxed">{feature.description}</p>
            </div>
        </div>
    );
}

function GridPattern({
    width,
    height,
    x,
    y,
    squares,
    ...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
    const patternId = React.useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y], index) => (
                        <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
                    ))}
                </svg>
            )}
        </svg>
    );
}

// Deterministic pattern generator using seed to avoid hydration mismatch
function genDeterministicPattern(seed: number, length: number = 5): number[][] {
    return Array.from({ length }, (_, i) => [
        ((seed + i * 3) % 4) + 7,  // x between 7 and 10
        ((seed + i * 7) % 6) + 1,  // y between 1 and 6
    ]);
}
