import { Button } from "@material-tailwind/react";
import React from "react";

const Divider = ({ DividerName }) => {
  return (
    <div className="">
      <hr className="bg-gray-700"></hr>
      <div className="flex justify-center">
        <Button className="flex items-center justify-center py-1 px-5 text-sm bg-[black] translate-y-[-17px]">
          {DividerName}
        </Button>
      </div>
    </div>
  );
};

export default Divider;
