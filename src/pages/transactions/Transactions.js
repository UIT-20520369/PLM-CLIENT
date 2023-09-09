import { React, useState } from "react";
import { Button, Chip, Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

import "./Transactions.scss";
function Transactions() {
  const [filter, setFilter] = useState({
    period: Date.now,
    types: ["Expenses", "Revenses"],
  });
  function handleFilterType(type) {
    let newTypes = filter.types;
    const index = newTypes.indexOf(type);
    if (index > -1) {
      newTypes.splice(index, 1);
    } else {
      newTypes.push(type);
    }
    setFilter({ ...filter, types: newTypes });
    console.log(filter.types);
  }
  return (
    <div id="transactions">
      <div className="actionContainer">
        <div className="left">
          <Typography variant="subtitle1" sx={{ height: "fit-content" }}>
            Period:
          </Typography>
          <DatePicker
            sx={{
              "& .MuiInputBase-input": {
                padding: "10px 8px",
                paddingRight: "0",
                fontSize: "1rem",
              },
            }}
          />
          <Chip
            icon={
              filter.types.includes("Expenses") ? (
                <CheckOutlinedIcon fontSize="small" />
              ) : null
            }
            label="Expenses"
            color={
              filter.types.includes("Expenses")
                ? "secondaryContainer"
                : "surface"
            }
            variant={filter.types.includes("Expenses") ? "filled" : "outlined"}
            onClick={(event) => handleFilterType("Expenses")}
          />
          <Chip
            icon={
              filter.types.includes("Revenses") ? (
                <CheckOutlinedIcon fontSize="small" />
              ) : null
            }
            label="Revenses"
            color={
              filter.types.includes("Revenses")
                ? "secondaryContainer"
                : "surface"
            }
            variant={filter.types.includes("Revenses") ? "filled" : "outlined"}
            onClick={(event) => handleFilterType("Revenses")}
          />
        </div>
        <Button>Add Transactions</Button>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          hello
        </Grid>
        <Grid item xs={6}>
          hi
        </Grid>
      </Grid>
    </div>
  );
}

export default Transactions;
