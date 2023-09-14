import {
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import "./TransactionList.scss";

function TransactionList() {
  return (
    <div className="transaction-list">
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.surfaceContainer.main,
          height: "100%",
          borderRadius: (theme) => theme.shape.borderRadius,
          padding: "12px",
        }}
      >
        <div className="header">
          <Typography variant="h6">Transactions</Typography>
          <ToggleButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <ToggleButton selected>
              <CheckOutlinedIcon fontSize="14px" sx={{ marginRight: "8px" }} />
              Newest
            </ToggleButton>
            <ToggleButton>
              <CheckOutlinedIcon fontSize="14px" sx={{ marginRight: "8px" }} />
              Oldest
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Box>
    </div>
  );
}

export default TransactionList;
