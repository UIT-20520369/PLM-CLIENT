import { React, useState } from "react";
import { Button, Chip, Grid, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TransactionList from "./transaction-list/TransactionList";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import "./Transactions.scss";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Ho_Chi_Minh");
function Transactions() {
  const [sortOrder, setSortOrder] = useState("Newest");
  const [filter, setFilter] = useState({
    period: dayjs(),
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
            value={filter.period}
            views={["year", "month"]}
            openTo="month"
            onChange={(newValue) => setFilter({ ...filter, period: newValue })}
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
        <Button
          variant="filled"
          disableElevation
          size="small"
          startIcon={<AddOutlinedIcon />}
        >
          Add Transactions
        </Button>
      </div>
      {/* <Grid container spacing={4} sx={{ height: "100%" }}>
        <Grid item xs={6}>
          <TransactionList />
        </Grid>
        <Grid item xs={6}>
          hi
        </Grid>
      </Grid> */}
      <div className="section-divider">
        <TransactionList sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <span>hi</span>
      </div>
    </div>
  );
}

export default Transactions;
