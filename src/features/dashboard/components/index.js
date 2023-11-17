import React, { useState } from "react";
import { blueGradient1 } from "components/tailwindClasses";

import UserAddition from "./userAddition";
import UserDetails from "./userDetails";

const inactiveButtonStyle =
  "flex justify-center items-center mr-[2vw] h-15 w-60";

function Index(props) {
  let [activeOption, setActiveOption] = useState(0);
  return (
    <div className="my-1p flex flex-col items-center">
      <div className="flex ">
        <div
          style={
            activeOption === 0
              ? {
                  display: "flex",
                  flexGrow: "1",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: "400",
                  height: "60px",
                  marginRight: "1%",
                  borderRadius: "10px",
                  cursor: "default",
                }
              : {
                  display: "flex",
                  flexGrow: "1",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: "400",
                  height: "60px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                  cursor: "default",
                }
          }
          className="bg-white dark:bg-lightBlack dark:text-white"
        >
          <div
            className={
              activeOption === 0
                ? `${inactiveButtonStyle} ${blueGradient1} rounded-10 font-bold`
                : inactiveButtonStyle
            }
            onClick={() => {
              setActiveOption(() => 0);
            }}
          >
            User Details
          </div>
          <div
            className={
              activeOption === 1
                ? `${inactiveButtonStyle} ${blueGradient1} rounded-10 font-bold`
                : inactiveButtonStyle
            }
            onClick={() => {
              setActiveOption(() => 1);
            }}
          >
            Add User
          </div>
        </div>
      </div>
      <div className="mt-2p">
        <div>{activeOption === 1 && <UserAddition />}</div>
        <div>{activeOption === 0 && <UserDetails />}</div>
      </div>
    </div>
  );
}

export default Index;
