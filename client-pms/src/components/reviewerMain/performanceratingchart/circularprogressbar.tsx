import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 60;

const arr =  ['One', "two ", 'three']



function CircuarProgressbar() {
  return (
    <div style={{ width: "70px", height: 30,marginTop:"10px" }}>
      <CircularProgressbar
      strokeWidth={20}
      
        value={percentage}
        // text={`${percentage}%`}
        text={`${percentage}`}
        styles={buildStyles({
          textColor: "#000",
          pathColor: "#00b050",
          trailColor: "#f6c609",
         
          
        })}
      />
    </div>
  );
}
export default CircuarProgressbar;
