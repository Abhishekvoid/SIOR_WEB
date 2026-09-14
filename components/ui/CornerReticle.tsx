import React from 'react';

interface CornerReticleProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export const CornerReticle: React.FC<CornerReticleProps> = ({ position, className = '' }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    width: '12px',
    height: '12px',
    pointerEvents: 'none',
    borderColor: 'rgba(234, 231, 225, 0.28)',
    borderStyle: 'solid',
    borderWidth: 0,
    ...(position === 'top-left' && { top: 0, left: 0, borderTopWidth: 1, borderLeftWidth: 1 }),
    ...(position === 'top-right' && { top: 0, right: 0, borderTopWidth: 1, borderRightWidth: 1 }),
    ...(position === 'bottom-left' && { bottom: 0, left: 0, borderBottomWidth: 1, borderLeftWidth: 1 }),
    ...(position === 'bottom-right' && { bottom: 0, right: 0, borderBottomWidth: 1, borderRightWidth: 1 }),
  };

  return <div style={styles} className={className} aria-hidden="true" />;
};
