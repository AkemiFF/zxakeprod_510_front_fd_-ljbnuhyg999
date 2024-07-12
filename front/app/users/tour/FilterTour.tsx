import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import RateModif from "@/components/ui/RateModif";

const FilterTour = () => {
  const [kilometers, setkilometers] = useState(5);
  const [price, setPrice] = useState(15);

  const sliderPrice = [];

  if (price >= 1000) {
    sliderPrice.push("more than $2000");
  } else if (price < 21) {
    sliderPrice.push(" from $25");
  } else {
    sliderPrice.push("$"+price);
  }
  return (
    <aside className="col-span-1 mt-4 w-80 ps-10 md:float-left sticky top-4 h-screen overflow-y-auto">
      <Card>
        <CardHeader className="bg-primary rounded-t-xl p-3">
          <h3 className="text-base font-semibold text-white ">Filters</h3>
        </CardHeader>

        <CardContent>
          <div className="mt-3">
                <h4 className="text-base font-medium">Plans</h4>
                <div className="flex flex-row space-y-2 mt-1">
                    <Checkbox id="particular" className = "mt-2"/>
                    <Label htmlFor="particular" className="ms-2">Particular</Label>
                </div>
                <div className="flex flex-row space-y-2 mt-1">
                    <Checkbox id="withGroup" className = "mt-2"/>
                    <Label htmlFor="withGroup" className="ms-2">With group</Label>
                </div>
          </div>


          <div className="mt-8">
                <h4 className="text-md font-semibold">Budget</h4>
                <div className="flex flex-col space-y-2 mt-2">
                <Label htmlFor="less-5km text-lg">By {sliderPrice}</Label>
                <Slider
                    defaultValue={[5]}
                    max={1000}
                    min={15}
                    step={1}
                    className="h-5"
                    value={[price]}
                    onValueChange={(e: React.SetStateAction<number>[]) =>
                    setPrice(e[0])
                    }
                />
                </div>
          </div>

          <div className="mt-8">
            <h4 className="text-base font-medium">Trip duration</h4>
                <div className="flex flex-row space-y-2 mt-1">
                    <Checkbox id="particular" className = "mt-2"/>
                    <Label htmlFor="particular" className="ms-2">From 1 to 7 days</Label>
                </div>
                <div className="flex flex-row space-y-2 mt-1">
                    <Checkbox id="moreThanOneWeek" className = "mt-2"/>
                    <Label htmlFor="moreThanOneWeek" className="ms-2">More than 1 week </Label>
                </div>
                <div className="flex flex-row space-y-2 mt-1">
                    <Checkbox id="moreThanTwoWeek" className = "mt-2"/>
                    <Label htmlFor="moreThanTwoWeek" className="ms-2">More than 2 weeks </Label>
                </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default FilterTour;
