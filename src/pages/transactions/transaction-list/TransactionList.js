import {
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Paper,
  List,
  ListItemButton,
  ListSubheader,
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
          <Paper sx={{ borderRadius: "12px" }}>
            <List>
              <ListSubheader component="div" className="item-header">
                <Typography variant="h2" component="p">
                  22
                </Typography>
                <div className="date">
                  <Typography variant="body2" color="onSurface">
                    Wednesday
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="onSurfaceVariant"
                    component="p"
                  >
                    June, 2023
                  </Typography>
                </div>
                <Typography variant="h3" component="p" color="pay">
                  -20,000
                </Typography>
              </ListSubheader>
              <Divider sx={{ margin: "4px 0;" }} />
              <ListItemButton sx={{ display: "block", borderRadius: "0" }}>
                <TransactionItem
                  style={{
                    padding: "0",
                  }}
                />
              </ListItemButton>
              <ListItemButton sx={{ display: "block", borderRadius: "0" }}>
                <TransactionItem
                  style={{
                    padding: "0",
                  }}
                />
              </ListItemButton>
              <ListItemButton sx={{ display: "block", borderRadius: "0" }}>
                <TransactionItem
                  style={{
                    padding: "0",
                  }}
                />
              </ListItemButton>
            </List>
          </Paper>
        </div>
      </Box>
    </div>
  );
}

export default TransactionList;
