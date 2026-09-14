import React from 'react';

interface MonospaceBadgeProps {
  label: string;
  variant?: 'coral' | 'bone' | 'muted';
  className?: string;
}

export const MonospaceBadge: React.FC<MonospaceBadgeProps> = ({
  label,
  variant = 'coral',
  className = '',
}) => {
  const getColors = () => {
    switch (variant) {
      case 'bone':
        return {
          color: 'var(--sior-stark-white)',
          backgroundColor: 'rgba(234, 231, 225, 0.08)',
          borderColor: 'rgba(234, 231, 225, 0.22)',
        };
      case 'muted':
        return {
          color: 'var(--sior-text-secondary)',
          backgroundColor: 'rgba(234, 231, 225, 0.04)',
          borderColor: 'var(--sior-line)',
        };
      case 'coral':
      default:
        return {
          color: 'var(--sior-zen-coral)',
          backgroundColor: 'rgba(247, 111, 83, 0.12)',
          borderColor: 'rgba(247, 111, 83, 0.3)',
        };
    }
  };

  const colors = getColors();

  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        padding: '0.12rem 0.45rem',
        borderRadius: '3px',
        border: `1px solid ${colors.borderColor}`,
        color: colors.color,
        backgroundColor: colors.backgroundColor,
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1.1,
      }}
    >
      {label}
    </span>
  );
};
