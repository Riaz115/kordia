import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LoadingOverlaySmall } from "./LoadingOverlay";
import { color } from "chart.js/helpers";
import { data } from "react-router-dom";

export default function TableMuiCustom({
  th,
  td,
  styleTableTh,
  styleTableContainer,
  styleTableThead,
  headerRounded,
  rowRounded,
  customFields,
  loading,
  cellStyles,
  rowColor,
}) {
  const found = (key) => customFields?.find((obj) => obj.name === key);

  return (
    <>
      <TableContainer style={styleTableContainer}>
        <Table
          aria-label="simple table"
          style={{ borderCollapse: "separate", borderSpacing: "0px 4px" }}
        >
          <Header
            headerRounded
            values={{
              styleTableThead,
              th,
              loading,
              styleTableTh,
            }}
          />
          {!loading && (
            <TableBody>
              {td?.map((row, index) => (
                <MuiTableRow
                  rowRounded
                  rowColor={rowColor}
                  values={{ row, th, index, found, customFields, cellStyles }}
                />
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {loading && <LoadingOverlaySmall open={loading} />}
    </>
  );
}

const MuiTableRow = ({ values, rowRounded, rowColor }) => {
  const { row, th, index, found, customFields, cellStyles } = values;

  const rowStyle = {
    backgroundColor: rowColor || "#ffff", // Set row background to white
    "& td:first-child": {
      borderRadius: rowRounded ? "1em 0 0 1em" : 0,
    },
    "& td:last-child": {
      borderRadius: rowRounded ? "0 1em 1em 0" : 0,
    },
  };

  return (
    <TableRow key={index} sx={{ ...rowStyle }}>
      {Object.keys(th).map((key, ind) => (
        <TableCell
          key={ind}
          style={{
            whiteSpace: "nowrap",
            color: "#003B93",
            ...(cellStyles?.[key] || {}),
          }}
          align="left"
        >
          {customFields && found(key)
            ? found(key).data(row[key], row)
            : getNestedValue(row, key)}
          {key === "sr" && index + 1}
        </TableCell>
      ))}
    </TableRow>
  );
};

const Header = ({ values, headerRounded }) => {
  const { styleTableThead, th, styleTableTh } = values;

  const headerStyle = {
    backgroundColor: "lightgray",
  };

  return (
    <TableHead sx={{ ...headerStyle, ...styleTableThead }}>
      <TableRow>
        {Object.entries(th).map(([key, value], index, array) => (
          <TableCell
            key={index}
            align="left"
            sx={{
              whiteSpace: "nowrap",
              ...styleTableTh,
              borderRadius:
                headerRounded && index === 0
                  ? "10px 0 0 10px"
                  : headerRounded && index === array.length - 1
                  ? "0 10px 10px 0"
                  : 0,
            }}
          >
            {value}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const getNestedValue = (obj, key) => {
  const keys = key.split(".");
  return keys.reduce(function (acc, currentKey) {
    return acc && acc[currentKey] !== undefined ? acc[currentKey] : "";
  }, obj);
};
