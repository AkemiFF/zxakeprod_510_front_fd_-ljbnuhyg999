import { tour } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ExclusiveTour(props: tour) {
  return (
    <Card>
      <Image
        height={600}
        width={600}
        src={props.imageTour}
        alt="tour"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardContent className="p-4">
        <div>
            <h3 className="text-lg font-bold mb-2">{props.circuitTour}</h3>
            <p className = "text-muted-foreground font-semibold">{props.operatorTour}</p>
        </div>
        
        <p className="mb-4 mt-2 text-sm">
          {props.descriptionsTour}
        </p>
        <div className="flex items-center justify-between">
          <Link href="/users/tour/id">
            <Button>View mode</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
