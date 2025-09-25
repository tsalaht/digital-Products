"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type LogoType = 'logo1' | 'logo2' | 'logo3' | 'logo4';

type GlowColor = 'blue' | 'emerald' | 'purple' | 'amber';

interface LogoProps {
  type: LogoType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  logoType: LogoType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Logo Components ---
const logoComponents: Record<LogoType, { src: string; color: string }> = {
  logo1: {
    src: '/logo1.jpg',
    color: '#3B82F6' // Blue
  },
  logo2: {
    src: '/logo2.jpg',
    color: '#10B981' // Emerald
  },
  logo3: {
    src: '/logo3.jpg',
    color: '#8B5CF6' // Purple
  },
  logo4: {
    src: '/logo4.jpg',
    color: '#F59E0B' // Amber
  }
};

// --- Memoized Logo Component ---
const LogoComponent = memo(({ type }: LogoProps) => {
  const logoData = logoComponents[type];
  return logoData ? (
    <img 
      src={logoData.src} 
      alt={`${type} logo`}
      className="w-full h-full object-contain rounded-lg"
    />
  ) : null;
});
LogoComponent.displayName = 'LogoComponent';

// --- Configuration for the Orbiting Logos ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  { 
    id: 'logo1',
    orbitRadius: 120, 
    size: 80, 
    speed: 1, 
    logoType: 'logo1', 
    phaseShift: 0, 
    glowColor: 'blue',
    label: 'حلول البرمجيات'
  },
  { 
    id: 'logo2',
    orbitRadius: 120, 
    size: 80, 
    speed: 1, 
    logoType: 'logo2', 
    phaseShift: Math.PI, 
    glowColor: 'emerald',
    label: 'إدارة المشاريع'
  },
  // Outer Orbit
  { 
    id: 'logo3',
    orbitRadius: 200, 
    size: 90, 
    speed: -0.7, 
    logoType: 'logo3', 
    phaseShift: 0, 
    glowColor: 'purple',
    label: 'الحلول المحاسبية'
  },
  { 
    id: 'logo4',
    orbitRadius: 200, 
    size: 90, 
    speed: -0.7, 
    logoType: 'logo4', 
    phaseShift: Math.PI, 
    glowColor: 'amber',
    label: 'ذكاء اصطناعي'
  },
];

// --- Memoized Orbiting Logo Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, logoType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125' : ''}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${logoComponents[logoType]?.color}40, 0 0 60px ${logoComponents[logoType]?.color}20`
            : undefined
        }}
      >
        <LogoComponent type={logoType} />
        {isHovered && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-900/95 backdrop-blur-sm rounded-lg text-sm text-white whitespace-nowrap pointer-events-none shadow-xl">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'blue', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    blue: {
      primary: 'rgba(59, 130, 246, 0.4)',
      secondary: 'rgba(59, 130, 246, 0.2)',
      border: 'rgba(59, 130, 246, 0.3)'
    },
    emerald: {
        primary: 'rgba(59, 130, 246, 0.4)',
        secondary: 'rgba(59, 130, 246, 0.2)',
        border: 'rgba(59, 130, 246, 0.3)'
    },
    purple: {
        primary: 'rgba(59, 130, 246, 0.4)',
        secondary: 'rgba(59, 130, 246, 0.2)',
        border: 'rgba(59, 130, 246, 0.3)'
    },
    amber: {
        primary: 'rgba(59, 130, 246, 0.4)',
        secondary: 'rgba(59, 130, 246, 0.2)',
        border: 'rgba(59, 130, 246, 0.3)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.blue;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 20px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 120, glowColor: 'blue', delay: 0 },
    { radius: 200, glowColor: 'purple', delay: 1.5 }
  ];

  return (
    <main className="w-full flex items-center justify-center ">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      <div 
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central Logo with enhanced glow */}
        <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-white rounded-full flex items-center justify-center z-10 relative shadow-2xl border-4 border-blue-200">
          <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10 p-2">
            <img 
              src="/logo.png" 
              alt="Main Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </main>
  );
}