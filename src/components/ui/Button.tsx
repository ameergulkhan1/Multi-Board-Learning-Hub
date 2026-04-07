import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

// ============================================
// STYLED BUTTON COMPONENT
// Professional Button with multiple variants
// ============================================

const StyledButton = styled.button<{
  $variant: ButtonProps['variant'];
  $size: ButtonProps['size'];
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  font-family: ${theme.typography.fontFamily.base};
  font-weight: ${theme.typography.fontWeight.medium};
  border: none;
  cursor: pointer;
  transition: all ${theme.transition.fast};
  border-radius: ${theme.borderRadius.sm};
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  
  /* Size Variants */
  ${(props) => {
    switch (props.$size) {
      case 'sm':
        return `
          padding: ${theme.components.button.padding.sm};
          height: ${theme.components.button.height.sm};
          font-size: ${theme.typography.fontSize.xs};
        `;
      case 'lg':
        return `
          padding: ${theme.components.button.padding.lg};
          height: ${theme.components.button.height.lg};
          font-size: ${theme.typography.fontSize.base};
        `;
      case 'xl':
        return `
          padding: ${theme.components.button.padding.xl};
          height: ${theme.components.button.height.xl};
          font-size: ${theme.typography.fontSize.lg};
        `;
      case 'md':
      default:
        return `
          padding: ${theme.components.button.padding.md};
          height: ${theme.components.button.height.md};
          font-size: ${theme.typography.fontSize.sm};
        `;
    }
  }}

  /* Color Variants */
  ${(props) => {
    switch (props.$variant) {
      // PRIMARY VARIANT
      case 'primary':
        return `
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.primary.contrast};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary.dark};
            box-shadow: ${theme.shadows.md};
            transform: translateY(-2px);
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.primary.dark};
            transform: translateY(0);
          }
          
          &:focus-visible {
            outline: 2px solid ${theme.colors.primary.main};
            outline-offset: 2px;
          }
        `;
      
      // SECONDARY VARIANT
      case 'secondary':
        return `
          background-color: transparent;
          color: ${theme.colors.primary.main};
          border: 1.5px solid ${theme.colors.primary.main};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary.lighter};
            box-shadow: ${theme.shadows.sm};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.primary.lighter};
          }
          
          &:focus-visible {
            outline: 2px solid ${theme.colors.primary.main};
            outline-offset: 2px;
          }
        `;
      
      // TERTIARY VARIANT
      case 'tertiary':
        return `
          background-color: transparent;
          color: ${theme.colors.primary.main};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary.lighter};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.primary.lighter};
          }
          
          &:focus-visible {
            outline: 2px solid ${theme.colors.primary.main};
            outline-offset: 2px;
          }
        `;
      
      // DANGER VARIANT
      case 'danger':
        return `
          background-color: ${theme.colors.danger.main};
          color: ${theme.colors.danger.contrast};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.danger.dark};
            box-shadow: ${theme.shadows.md};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.danger.dark};
          }
          
          &:focus-visible {
            outline: 2px solid ${theme.colors.danger.main};
            outline-offset: 2px;
          }
        `;
      
      // SUCCESS VARIANT
      case 'success':
        return `
          background-color: ${theme.colors.success.main};
          color: ${theme.colors.success.contrast};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.success.dark};
            box-shadow: ${theme.shadows.md};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.success.dark};
          }
          
          &:focus-visible {
            outline: 2px solid ${theme.colors.success.main};
            outline-offset: 2px;
          }
        `;
      
      // WARNING VARIANT
      case 'warning':
        return `
          background-color: ${theme.colors.warning.main};
          color: ${theme.colors.warning.contrast};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.warning.dark};
            box-shadow: ${theme.shadows.md};
          }
          
          &:active:not(:disabled) {
            background-color: ${theme.colors.warning.dark};
          }
          
          &:focus-visible {
            outline: 2px solid ${theme.colors.warning.main};
            outline-offset: 2px;
          }
        `;
      
      default:
        return '';
    }
  }}

  /* Disabled State */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${theme.colors.bg.disabled};
    color: ${theme.colors.text.disabled};
  }

  /* Loading State */
  &[data-loading='true'] {
    pointer-events: none;
    opacity: 0.8;
  }
`;

// ============================================
// LOADING SPINNER
// ============================================

const LoadingSpinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 600ms linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// ============================================
// BUTTON COMPONENT
// ============================================

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      disabled = false,
      icon,
      iconPosition = 'start',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        disabled={disabled || loading}
        data-loading={loading}
        {...props}
      >
        {loading ? (
          <>
            <LoadingSpinner />
            {children}
          </>
        ) : (
          <>
            {icon && iconPosition === 'start' && icon}
            {children}
            {icon && iconPosition === 'end' && icon}
          </>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

