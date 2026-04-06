import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const sizeClass = `btn-${size}`;
    const variantClass = `btn-${variant}`;

    return (
      <button
        ref={ref}
        className={`btn ${variantClass} ${sizeClass}`}
        disabled={loading || props.disabled}
        style={{
          width: fullWidth ? '100%' : 'auto',
          opacity: loading ? 0.7 : 1,
          ...props.style,
        }}
        {...props}
      >
        {loading ? '⏳' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
