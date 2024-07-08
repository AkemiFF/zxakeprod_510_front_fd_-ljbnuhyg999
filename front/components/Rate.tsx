import React from "react";
import { StarIcon } from "./icons";

const Rate = ({ value }: { value: number }) => {
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
  return <div className="flex space-x-2">{stars}</div>;
};

export default Rate;
