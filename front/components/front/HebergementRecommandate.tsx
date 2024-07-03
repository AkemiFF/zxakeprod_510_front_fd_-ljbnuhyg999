import { hebergement } from "@/app/type";
import { HeartIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function HebergementRecommandation(props: hebergement) {
  return (
    <Card>
      <Image
        height={600}
        width={600}
        src={props.imageHebergement}
        alt="Room"
        className="w-full h-[200px] object-cover"
      />
      <CardContent>
        <div className="flex justify-between">
          <div className="flex items-center space-x-1">
            <StarIcon className="w-4 h-4 text-yellow-500" />
            <span>{props.nombreEtoileHebergement}</span>
          </div>
          <HeartIcon className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="mt-2 text-lg font-bold">
          {props.descriptionsHebergement}
        </h3>
        <p className="flex items-center mt-1 text-sm text-muted-foreground">
          {/* <MapPinIcon className="w-4 h-4 mr-1" /> */}
          {props.adressHebergement}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          explicabo cupiditate laboriosam blanditiis
        </p>
        <Button className="mt-4 w-full">View</Button>
      </CardContent>
    </Card>
  );
}
