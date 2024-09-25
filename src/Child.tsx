import React from "react";
import { ChildProps } from "./type";


const Child = ({ increment }:ChildProps) => {
  console.log("hello i am in childs");
  return (
    <>
      <h1>Child</h1>
    </>
  );
};

export default React.memo(Child); // React.memo to avoid unnecessary re-renders