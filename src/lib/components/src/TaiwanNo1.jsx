import React from "react";
import "./yuting.css";
import ImgList from "./ImgList";
//
// IMPORT ZONE
//
const YutingButton = () => {
  return (
    <div
      style={{
        borderRadius: "30px",
        width: "100px",
        animation: "spin 8s linear infinite",
      }}
    >
      <img
        src={ImgList[0].taiwanNo1}
        alt="tim"
        width="100%"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};

export default YutingButton;
