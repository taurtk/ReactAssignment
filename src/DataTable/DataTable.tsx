// src/components/DataTable/DataTable.tsx
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Post from '../models/Post';

interface DataTableProps {
  rows: Post[];
}

const DataTable: React.FC<DataTableProps> = ({ rows }) => {
  const columns: GridColDef[] = Object.keys(rows[0] || {}).map((key) => ({
    field: key,
    headerName: key.charAt(0).toUpperCase() + key.slice(1),
    width: 200,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
       
        checkboxSelection
        // Add this line to disable selection on click
      />
    </div>
  );
};

export default DataTable;
