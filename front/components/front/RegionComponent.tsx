import { region } from "@/app/type";
import Image from "next/image";
import Link from "next/link";

export default function RegionComponent(props: region) {
  return (
    <Link
      href="#"
      className="group relative overflow-hidden rounded-lg shadow-lg"
      prefetch={false}
    >
      <Image
        src={props.imageLink}
        width={1000}
        height={1000}
        alt="Destination"
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
        <h3 className="text-xl font-bold text-primary-foreground">
          {props.name}
        </h3>
      </div>
    </Link>
  );
}
