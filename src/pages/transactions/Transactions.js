import React from "react";
import { Button, Chip, Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./Transactions.css";
function handleFilterType() {}
function Transactions() {
  return (
    <div className="transactions">
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
          <Chip label="Expenses" onClick={handleFilterType} />
          <Chip
            label="Revenses"
            variant="outlined"
            onClick={handleFilterType}
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
