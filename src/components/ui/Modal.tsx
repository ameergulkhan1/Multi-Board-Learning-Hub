import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeButton?: boolean;
  closeOnBackdrop?: boolean;
}

// ============================================
// STYLED COMPONENTS
// ============================================

const Backdrop = styled.div`
  position: fixed;
  z-index: ${theme.zIndex.modal - 1};
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: ${theme.colors.bg.overlay};
  backdrop-filter: blur(4px);
  animation: fadeIn ${theme.transition.fast};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: ${theme.zIndex.modal};
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div<{ $size: ModalProps['size'] }>`
  position: relative;
  background-color: ${theme.colors.bg.primary};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows['2xl']};
  max-height: 90vh;
  overflow-y: auto;
  
  ${(props) => {
    switch (props.$size) {
      case 'sm':
        return 'max-width: 400px; width: 90%;';
      case 'lg':
        return 'max-width: 800px; width: 90%;';
      case 'xl':
        return 'max-width: 1000px; width: 90%;';
      case 'md':
      default:
        return 'max-width: 600px; width: 90%;';
    }
  }}

  animation: slideIn 300ms cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.bg.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.border.light};
    border-radius: 4px;

    &:hover {
      background: ${theme.colors.border.medium};
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.xl};
  border-bottom: 1px solid ${theme.colors.border.light};
  gap: ${theme.spacing.lg};
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.base};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.sm};
  transition: all ${theme.transition.fast};
  flex-shrink: 0;

  &:hover {
    background-color: ${theme.colors.bg.secondary};
    color: ${theme.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary.main};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${theme.colors.bg.tertiary};
  }
`;

const ModalBody = styled.div`
  padding: ${theme.spacing.xl};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.lg};
`;

const ModalFooter = styled.div`
  padding: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.border.light};
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

// ============================================
// MODAL COMPONENT
// ============================================

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  footer,
  size = 'md',
  closeButton = true,
  closeOnBackdrop = true,
}) => {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnBackdrop && e.target === e.currentTarget) {
        onClose();
      }
    },
    [closeOnBackdrop, onClose]
  );

  // Handle Escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalContainer onClick={handleBackdropClick}>
      <Backdrop />
      <ModalContent $size={size}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          {closeButton && (
            <CloseButton onClick={onClose} aria-label="Close modal" title="Close (Esc)">
              ✕
            </CloseButton>
          )}
        </ModalHeader>

        <ModalBody>{children}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ModalContainer>
  );
};

Modal.displayName = 'Modal';
