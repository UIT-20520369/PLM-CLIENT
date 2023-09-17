import {
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Paper,
} from "@mui/material";
import TransactionItem from "../../../shared/transaction-item/TransactionItem";
import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import "./TransactionList.scss";

function TransactionList() {
  const [sortOrder, setSortOrder] = React.useState("Newest");
  const handleOrder = (event, newSortOrder) => {
    if (newSortOrder !== null) {
      setSortOrder(newSortOrder);
    }
  };
  return (
    <div className="transaction-list">
      <Box
        className="container"
        sx={{
          bgcolor: (theme) => theme.palette.surfaceContainer.main,
          height: "100%",
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
      >
        <div className="header">
          <Typography variant="h6">Transactions</Typography>
          <ToggleButtonGroup
            variant="outlined"
            value={sortOrder}
            exclusive
            aria-label="outlined primary button group"
            onChange={handleOrder}
          >
            <ToggleButton value="Newest">
              {sortOrder === "Newest" ? (
                <CheckOutlinedIcon
                  fontSize="14px"
                  sx={{ marginRight: "8px" }}
                />
              ) : null}
              Newest
            </ToggleButton>
            <ToggleButton value="Oldest">
              {sortOrder === "Oldest" ? (
                <CheckOutlinedIcon
                  fontSize="14px"
                  sx={{ marginRight: "8px" }}
                />
              ) : null}
              Oldest
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Divider />
        <div className="content">
          <Paper sx={{ padding: "12px", borderRadius: "12px" }}>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
          </Paper>
        </div>
      </Box>
    </div>
  );
}

export default TransactionList;
