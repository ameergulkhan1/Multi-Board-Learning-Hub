import React from 'react';
import {
  CommandBar,
  ICommandBarItemProps,
  SearchBox,
} from '@fluentui/react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface DashboardCommandBarProps {
  onSearch?: (query: string) => void;
  onAction?: (actionKey: string) => void;
  actions?: Array<{
    key: string;
    name: string;
    iconProps?: { iconName: string };
    onClick: () => void;
  }>;
  searchPlaceholder?: string;
  showSearch?: boolean;
}

// ============================================
// STYLED FLUENT COMMAND COMPONENTS
// Professional Fluent UI Command Bar
// ============================================

const CommandBarContainer = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-bottom: 1px solid ${theme.colors.border.light};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};

  .ms-CommandBar {
    background-color: transparent;
    padding: 0;
    border: none;
    box-shadow: none;

    .ms-CommandBar-primaryCommand {
      color: ${theme.colors.text.primary};

      &:hover {
        background-color: ${theme.colors.bg.tertiary};
      }
    }
  }

  .ms-SearchBox {
    min-width: 280px;

    .ms-SearchBox-field {
      background-color: ${theme.colors.bg.primary};
      border: 1px solid ${theme.colors.border.light};
      border-radius: ${theme.borderRadius.md};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      font-size: ${theme.typography.fontSize.sm};

      &:focus {
        border-color: ${theme.colors.primary.main};
        box-shadow: 0 0 0 3px ${theme.colors.primary.main}12;
      }
    }

    .ms-SearchBox-clearButton {
      color: ${theme.colors.text.secondary};

      &:hover {
        color: ${theme.colors.text.primary};
      }
    }
  }
`;

const SearchBoxWrapper = styled.div`
  flex: 1;
  max-width: 400px;
`;

// ============================================
// DASHBOARD COMMAND BAR COMPONENT
// Fluent UI-based command bar for dashboard actions
// ============================================

export const DashboardCommandBar: React.FC<DashboardCommandBarProps> = ({
  onSearch,
  onAction,
  actions = [],
  searchPlaceholder = 'Search...',
  showSearch = true,
}) => {
  const commandBarItems: ICommandBarItemProps[] = actions.map((action) => ({
    key: action.key,
    name: action.name,
    iconProps: action.iconProps || { iconName: 'Add' },
    onClick: () => {
      action.onClick();
      onAction?.(action.key);
    },
  }));

  const commandBarFarItems: ICommandBarItemProps[] = [];

  return (
    <CommandBarContainer>
      {showSearch && (
        <SearchBoxWrapper>
          <SearchBox
            placeholder={searchPlaceholder}
            onChange={(_, newValue) => onSearch?.(newValue || '')}
            styles={{
              root: {
                width: '100%',
              },
            }}
          />
        </SearchBoxWrapper>
      )}

      <CommandBar
        items={commandBarItems}
        farItems={commandBarFarItems}
        ariaLabel="Dashboard actions"
        styles={{
          root: {
            padding: 0,
            backgroundColor: 'transparent',
          },
        }}
      />
    </CommandBarContainer>
  );
};

DashboardCommandBar.displayName = 'DashboardCommandBar';
