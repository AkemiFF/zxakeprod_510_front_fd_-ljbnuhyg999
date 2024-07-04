"use client ";

import { commandListReducer } from "@/app/type";
import { useState } from "react";
import DropComponent from "./DropComponent";

export default function AccommodationSearchComponent() {
  const [choice, setChoice] = useState("");
  const accommodation: commandListReducer[] = [
    {
      label: "Hotel",
      value: "hotel",
    },
    {
      label: "Resort",
      value: "resort",
    },
    {
      label: "Vacation",
      value: "vacation",
    },
  ];
  const handleItemSelected = (selectedValue: string) => {
    console.log("Selected item:", selectedValue);
    setChoice(selectedValue);
    // You can perform other actions with the selected value here
  };

  return (
    <DropComponent datas={accommodation} onSelectedValue={handleItemSelected} />
  );
}
