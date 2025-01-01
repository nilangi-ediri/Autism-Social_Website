import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Protect() {
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .get("http://localhost:3000/protect", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        navigate("/signin");
      });
  }, []);

  return <div>Protect content</div>;
}

export default Protect;
