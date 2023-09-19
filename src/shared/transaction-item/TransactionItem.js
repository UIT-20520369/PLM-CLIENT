import { Typography } from "@mui/material";
import Icon from "../../assets/images/icon_10.png";
import "./TransactionItem.scss";

const defaultStyle = {
  alignItems: "center",
  gap: "12px",
  padding: "4px 8px",
};
function TransactionItem({ style }) {
  const newStyle = {
    ...defaultStyle,
    ...style,
  };
  return (
    <div className="transaction-item" style={newStyle}>
      <img src={Icon} alt=""></img>
      <div className="content">
        <Typography variant="body2">Eating out</Typography>
        <Typography variant="subtitle1" color="onSurfaceVariant" component="p">
          with John
        </Typography>
      </div>
      <Typography variant="h6" component="p" color="pay">
        -20,000
      </Typography>
    </div>
  );
}

export default TransactionItem;
