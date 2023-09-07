import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { getAllUsers } from "../../services/api/users/userServices";
export default () => {
  const [users, setUser] = useState();
  // useEffect(() => {
  //   getAllUsers().then(response =>{
  //       console.log(response);
  //       setUser(response);
  //   })
  // }, []);
  return (
    <div>
      <p>Đây là trang login nè</p>
      {users && users.users.length > 0 && (
        <div>
          {" "}
          {users.users.map((c) => (
            <p key={c.id}>{c.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};
