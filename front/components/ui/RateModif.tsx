import React, { useState } from "react";
import { StarIcon } from "../icons";
import { Button } from "./button";

const RateModif = () => {
  const [value, setValue] = useState(0);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(
        <span key={i}>
          <StarIcon className="w-6 h-6 text-yellow-500 fill-yellow-500" />
        </span>
      );
    } else {
      stars.push(
        <span key={i}>
          <StarIcon className="w-6 h-6 text-yellow-500 " />
        </span>
      );
    }
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full">
      <div className="flex mt-4 space-x-2">{stars}</div>
      <div className="flex items-center justify-center gap-10">
        <Button
          className="rounded-full text-xl px-10"
          onClick={() => {
            if (value != 0) {
              setValue(value - 1);
            }
          }}
        >
          -
        </Button>
        <Button
          className="rounded-full text-xl px-10"
          onClick={() => {
            if (value < 5) {
              setValue(value + 1);
            }
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default RateModif;
