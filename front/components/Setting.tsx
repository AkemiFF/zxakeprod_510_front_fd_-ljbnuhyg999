import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { StarIcon } from "./icons";
import RateModif from "./ui/RateModif";

const Setting = () => {
  const [kilometers, setkilometers] = useState(5);
  const [price, setPrice] = useState(15);

  const sliderKilometers = [];
  const sliderPrice = [];

  if (kilometers >= 1000) {
    sliderKilometers.push("more than 1000");
  } else if (kilometers < 100) {
    sliderKilometers.push("less than 100");
  } else {
    sliderKilometers.push(kilometers);
  }

  if (price >= 1000) {
    sliderPrice.push("more than 1000");
  } else if (price < 21) {
    sliderPrice.push("less than 20");
  } else {
    sliderPrice.push(price);
  }
  return (
    <aside className="col-span-1 ">
      <Card>
        <CardHeader className="bg-primary rounded-t-xl">
          <h3 className="text-lg font-bold text-white ">Filters</h3>
        </CardHeader>
        <CardContent>
          <div className="mt-8">
            <h4 className="text-md font-semibold">Distance from downtown</h4>
            <div className="flex flex-col space-y-2 mt-5">
              <Label htmlFor="less-5km text-lg">By {sliderKilometers} Km</Label>
              <Slider
                defaultValue={[5]}
                max={1000}
                min={5}
                step={5}
                className="h-5"
                value={[kilometers]}
                onValueChange={(e: React.SetStateAction<number>[]) =>
                  setkilometers(e[0])
                }
              />
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-md font-semibold">Price per night</h4>
            <div className="flex flex-col space-y-2 mt-5">
              <Label htmlFor="less-5km text-lg">By {sliderPrice} $</Label>
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
            <h4 className="text-md font-semibold">Property rate</h4>
            <div className="flex items-center gap-1 mt-5">
              <RateModif />
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-md font-semibold">Facilities</h4>
            <div className="flex flex-col space-y-2">
              <Checkbox id="parking" />
              <Label htmlFor="parking">Parking</Label>
              <Checkbox id="wifi" />
              <Label htmlFor="wifi">Wi-Fi</Label>
              <Checkbox id="wellness" />
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Setting;
