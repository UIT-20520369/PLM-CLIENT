import React from "react";
import { useLocation } from "react-router-dom";
function Login1() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <p>Đây là trang login1 nè</p>
    </div>
  );
}

export default Login1;
