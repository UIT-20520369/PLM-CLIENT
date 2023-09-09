import React from "react";
import { Button, Chip, Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

import "./Transactions.scss";
function Transactions() {
  const filter = {
    period: Date,
    types: ["Expenses", "Revenses"],
  };
  function handleFilterType(type) {
    const index = filter.types.indexOf(type);
    if (index > -1) {
      filter.types.splice(index, 1);
    } else {
      filter.types.push(type);
    }
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
            icon={<CheckOutlinedIcon fontSize="small" />}
            label="Expenses"
            onClick={(event) => handleFilterType("Expenses")}
          />
          <Chip
            icon={<CheckOutlinedIcon fontSize="small" />}
            label="Revenses"
            variant="outlined"
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
