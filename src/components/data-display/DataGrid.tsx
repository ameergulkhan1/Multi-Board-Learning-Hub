import React from 'react';
import {
  DataGrid,
  Column,
  Paging,
  Sorting,
  FilterRow,
  HeaderFilter,
} from 'devextreme-react/data-grid';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface DataGridComponentProps {
  data: any[];
  columns: ColumnConfig[];
  allowPaging?: boolean;
  allowSorting?: boolean;
  allowFiltering?: boolean;
  pageSize?: number;
  height?: string | number;
  onRowClick?: (rowData: any) => void;
  onSelectionChanged?: (selectedKeys: any[]) => void;
}

interface ColumnConfig {
  dataField: string;
  caption: string;
  width?: number | string;
  alignment?: 'left' | 'right' | 'center';
  format?: string;
  customRender?: (value: any, rowData: any) => React.ReactNode;
}

// ============================================
// STYLED DATA GRID COMPONENTS
// ============================================

const DataGridContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.bg.primary};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.border.light};
`;

// ============================================
// DATA GRID COMPONENT
// ============================================

export const DataGridComponent: React.FC<DataGridComponentProps> = ({
  data,
  columns,
  allowPaging = true,
  allowSorting = true,
  allowFiltering = true,
  pageSize = 10,
  height = 600,
  onRowClick,
  onSelectionChanged,
}) => {
  const handleRowClick = (e: any) => {
    if (onRowClick) {
      onRowClick(e.data);
    }
  };

  const handleSelectionChanged = (selectedRowKeys: any[]) => {
    if (onSelectionChanged) {
      onSelectionChanged(selectedRowKeys);
    }
  };

  return (
    <DataGridContainer style={{ height }}>
      <DataGrid
        dataSource={data}
        onRowClick={handleRowClick}
        onSelectionChanged={(e: any) => handleSelectionChanged(e.selectedRowKeys)}
        columnAutoWidth={true}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        height="100%"
      >
        {/* Columns */}
        {columns.map((col) => (
          <Column
            key={col.dataField}
            dataField={col.dataField}
            caption={col.caption}
            width={col.width}
            alignment={col.alignment}
            format={col.format}
            cellRender={
              col.customRender
                ? (e: any) => col.customRender?.(e.value, e.data)
                : undefined
            }
          />
        ))}

        {/* Paging */}
        {allowPaging && (
          <Paging defaultPageSize={pageSize} />
        )}

        {/* Sorting */}
        {allowSorting && <Sorting mode="multiple" />}

        {/* Filtering */}
        {allowFiltering && (
          <>
            <FilterRow visible={true} />
            <HeaderFilter visible={true} />
          </>
        )}
      </DataGrid>
    </DataGridContainer>
  );
};

DataGridComponent.displayName = 'DataGridComponent';
