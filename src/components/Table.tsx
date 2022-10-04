/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  TableCell as Cell,
  TableContainer as Container,
  TableRow as Row,
  Table,
  TableBody,
  TableHead,
  Typography,
} from '@mui/material';
import React, { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';

import { TableProps } from '../interfaces/component';
import { styled } from '@mui/material/styles';

const TableHeadingCell = styled(Cell)(() => ({
  letterSpacing: '0.15px',
  lineHeight: '24px',
  fontSize: 16,
  borderLeft: 0,
  borderRight: 0,
}));

const TableCell = styled(Cell)(() => ({
  letterSpacing: '0.15px',
  lineHeight: '24px',
  fontSize: 14,
  padding: '16px',
}));

const TableRow = styled(Row)(() => ({
  whiteSpace: 'nowrap',
}));

const TableContainer = styled(Container)(() => ({
  borderBottom: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,

  /* width */
  '&::-webkit-scrollbar': {
    height: 12,
    width: 4,
  },

  /* Handle */
  '::-webkit-scrollbar-thumb': {
    borderRadius: 5,
  },

  '@media(max-width: 700px)': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
}));

const TableData = (props: TableProps) => {
  const { headings, type, rowData } = props;

  const compileHeader = (headings: any[], value: Key | null | undefined) => {
    return (
      <TableHead>
        <TableRow key={value}>
          {headings.map((heading, index) =>
            <TableHeadingCell
              key={`${heading.label}_${index}`}
              style={{
                fontWeight: 600,
                padding: '0px 20px',
                textAlign: 'left',
                borderTop: 0,
              }}
            >
              {heading.label}
            </TableHeadingCell>
          )}
        </TableRow>
      </TableHead>
    );
  };

  const renderData = (data: { [x: string]: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined | any; }, heading: { key: string; type: string; }) => {
    if (heading.key === 'destination') {
      return (
        <TableCell key={`${heading.key}_${data[heading.key] || 0}`} style={{ display: 'flex' }}>
          <Box style={{ flex: '1 1 auto' }}>
            <Typography fontSize={18} fontWeight={600}>{data[heading.key]}</Typography>
            <Typography fontSize={16}>Type: {data['tripType']}</Typography>
          </Box>
          <img src={data['imageURL']} alt={data['imageURL']} width={60} height={60} style={{ borderRadius: 8 }} />
        </TableCell>
      );
    }

    return (
      <TableCell key={`${heading.key}_${data[heading.key] || 0}`}>
        {data[heading.key]}
      </TableCell>
    );
  };

  const renderCell = (data: { [x: string]: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }, heading: { key: string; type: string; }) => {
    return renderData(data, heading);
  };

  const renderRow = (row: { [x: string]: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }, index: Key | null | undefined) => {
    const { headings } = props;

    return (
      <TableRow key={index}>
        {headings.map((heading: { key: string; type: string; }) => {
          return renderCell(row, heading);
        })}
      </TableRow>
    );
  };

  const compileBody = () => {
    const { emptyText } = props;

    return (
      <TableBody>
        {!rowData.length ? (
          <TableRow key="no content">
            <TableCell colSpan={headings.length}>{emptyText}</TableCell>
          </TableRow>
        ) : (
          rowData.map(renderRow)
        )}
      </TableBody>
    );
  };

  return (
    <TableContainer className="scrollbar">
      <Table stickyHeader style={{ borderCollapse: 'collapse', borderSpacing: 0 }}>
        {type !== 'trips' && compileHeader(headings, type)}
        {compileBody()}
      </Table>
    </TableContainer>
  );
};

export default TableData;
