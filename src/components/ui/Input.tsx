import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  variant?: 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

// ============================================
// STYLED INPUT COMPONENTS
// ============================================

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  width: 100%;
`;

const InputLabel = styled.label<{ $required?: boolean }>`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.primary};
  display: flex;
  gap: ${theme.spacing.xs};

  &::after {
    content: ${(props) => (props.$required ? '"*"' : '""')};
    color: ${theme.colors.danger.main};
  }
`;

const InputContainer = styled.div<{
  $variant: InputProps['variant'];
  $error?: boolean;
  $size: InputProps['size'];
}>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.$variant === 'filled' ? theme.colors.bg.secondary : theme.colors.bg.primary};
  border-radius: ${theme.borderRadius.md};
  border: 1.5px solid
    ${(props) => {
      if (props.$error) return theme.colors.danger.main;
      if (props.$variant === 'outlined') {
        return theme.colors.border.light;
      }
      return 'transparent';
    }};
  transition: all ${theme.transition.fast};
  padding: ${(props) => {
    switch (props.$size) {
      case 'sm':
        return '6px 10px';
      case 'lg':
        return '12px 16px';
      case 'md':
      default:
        return '8px 12px';
    }
  }};

  /* Focus State */
  &:focus-within {
    border-color: ${(props) =>
      props.$error ? theme.colors.danger.main : theme.colors.primary.main};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$error
          ? `${theme.colors.danger.main}12`
          : `${theme.colors.primary.main}12`};
  }

  /* Hover State */
  &:hover:not(:disabled) {
    border-color: ${(props) =>
      props.$error ? theme.colors.danger.main : theme.colors.primary.light};
  }
`;

const StyledInput = styled.input<{ $size: InputProps['size'] }>`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-family: ${theme.typography.fontFamily.base};
  font-size: ${(props) => {
    switch (props.$size) {
      case 'sm':
        return theme.typography.fontSize.xs;
      case 'lg':
        return theme.typography.fontSize.base;
      case 'md':
      default:
        return theme.typography.fontSize.sm;
    }
  }};
  color: ${theme.colors.text.primary};
  padding: 0;

  &::placeholder {
    color: ${theme.colors.text.tertiary};
    font-weight: ${theme.typography.fontWeight.normal};
  }

  &:disabled {
    color: ${theme.colors.text.disabled};
    cursor: not-allowed;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const Icon = styled.div<{ $position: 'start' | 'end' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.secondary};
  flex-shrink: 0;
  margin: ${(props) => (props.$position === 'start' ? '0 8px 0 0' : '0 0 0 8px')};
  font-size: ${theme.typography.fontSize.lg};
`;

const HelperText = styled.span<{ $error?: boolean }>`
  font-size: ${theme.typography.fontSize.xs};
  color: ${(props) =>
    props.$error ? theme.colors.danger.main : theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.sm};
`;

// ============================================
// INPUT COMPONENT
// ============================================

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      helperText,
      variant = 'outlined',
      size = 'md',
      icon,
      iconPosition = 'start',
      required,
      disabled,
      type = 'text',
      ...props
    },
    ref
  ) => {
    return (
      <InputWrapper>
        {label && <InputLabel $required={required}>{label}</InputLabel>}

        <InputContainer $variant={variant} $error={error || !!errorMessage} $size={size}>
          {icon && iconPosition === 'start' && (
            <Icon $position="start">{icon}</Icon>
          )}

          <StyledInput
            ref={ref}
            type={type}
            disabled={disabled}
            $size={size}
            {...props}
          />

          {icon && iconPosition === 'end' && (
            <Icon $position="end">{icon}</Icon>
          )}
        </InputContainer>

        {(errorMessage || helperText) && (
          <HelperText $error={error || !!errorMessage}>
            {errorMessage || helperText}
          </HelperText>
        )}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';
