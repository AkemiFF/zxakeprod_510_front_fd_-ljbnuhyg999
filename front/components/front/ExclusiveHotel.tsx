import { hebergement } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function ExclusiveHotel(props: hebergement) {
  return (
    <Card>
      <Image
        height={600}
        width={600}
        src={props.imageHebergement}
        alt="Hotel"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2">{props.nomHebergement}</h3>
        <p className="text-muted-foreground mb-4">
          {props.descriptionsHebergement}
        </p>
        <div className="flex items-center justify-between">
          <Link href="/users/hebergement/id">
            <Button>View mode</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
