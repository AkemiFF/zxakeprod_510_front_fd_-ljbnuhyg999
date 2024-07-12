/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Obwnb2fAUsf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import FilterTour from "@/app/users/tour/FilterTour";
import UserHeader from "@/components/UserHeader";
import Link from "next/link";
import { StarIcon } from "@/components/icons";
import RateModif from "@/components/ui/RateModif";
import { Spotlight } from "@/components/ui/SpotLight";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, RoadIcon } from "@/components/icons";

import DropTourComponent from "@/components/front/search/DropTourComponent";
import { commandListReducer, tour } from "@/app/type";
import { DatePick } from "@/components/DatePick";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
} from "@/components/ui/card";

import Image from "next/image";
import { useState } from "react";

import circuitImg from "../../../../public/tour/img2.png";

import FooterUser from "@/components/FooterUser";

export default function HebergementList() {
    const element: commandListReducer[] = [
        { label: "ZTrip Mada", value: "ZTrip Mada" },
        { label: "Tsiky Tour", value: "Tsiky Tour" },
        { label: "Tanala Adventures", value: "Tanala Adventures" },
      ];
      
      const destination = [
        { label: "Antananarivo", value: "Antananarivo" },
        { label: "Manakara", value: "Manakara" },
        { label: "Andasibe", value: "Andasibe" },
      ];
      const FormSchema = z.object({
        dob: z.date({
          required_error: "A",
        }),
      });
    
      const [choice, setChoice] = useState("Operator tours");
      const [destinationChoice, setDestinationChoice] = useState("Destination");
  
      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      });
      const form2 = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      });
      console.log(form, form2);
  
    const handleItemSelected = (selectedValue: string) => {
      console.log("Selected item:", selectedValue);
      setChoice(selectedValue);
    };
    const handleDestinationItemSelected = (selectedValue: string) => {
      console.log("Selected item:", selectedValue);
      setDestinationChoice(selectedValue);
    };

  const [circuit, setCircuit] = useState("Nosy Be");
  const [totalCircuit, setTotalCircuit] = useState("7");


  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    distance: [],
    price: [],
    propertyRate: [],
    facilities: [],
  });

  const circuits = [
    {
      id: 1,
      nameCircuit: "The wonders of South ",
      operatorTour : "ZTrip Mada",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente",
      price: "$255",
      distanceTrip : "500 km",
      interessed: 12,
      image: circuitImg.src,
      totalDay : "5 day",
      totalNight : "4 night",
    },
    {
        id: 2,
        nameCircuit: "The wonders of South",
        operatorTour : "ZTrip Mada",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente",
        price: "$255",
        distanceTrip : "500 km",
        interessed: 12,
        image: circuitImg.src,
        totalDay : "5 day",
        totalNight : "4 night",
    },
    {
        id: 3,
        nameCircuit: "The wonders of South",
        operatorTour : "ZTrip Mada",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente",
        price: "$255",
        distanceTrip : "500 km",
        interessed: 12,
        image: circuitImg.src,
        totalDay : "5 day",
        totalNight : "4 night",
    },
    {
      id: 4,
      nameCircuit: "The wonders of South ",
      operatorTour : "ZTrip Mada",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente",
      price: "$255",
      distanceTrip : "500 km",
      interessed: 12,
      image: circuitImg.src,
      totalDay : "5 day",
      totalNight : "4 night",
    },
    {
        id: 5,
        nameCircuit: "The wonders of South",
        operatorTour : "ZTrip Mada",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente. Temporibus corporis sed expedita, vero dolore esse hic alias corporis totam dolores dolor voluptatem voluptate quisquam sit animi fugit sapiente",
        price: "$255",
        distanceTrip : "500 km",
        interessed: 12,
        image: circuitImg.src,
        totalDay : "5 day",
        totalNight : "4 night",
    },   
  ];


  return (
    <>
      <UserHeader />
      <Spotlight fill="#5B876B" className="absolute top-0" />
      <div className="flex flex-col items-center w-full min-h-screen ">
        <main className="container mx-auto p-4">
          <div className="mt-4 my-8 ml-10 bg-[#e0ebe9] flex flex-col items-center p-6 h-48">
                <h2 className="text-xl font-bold">
                    Find your dream travel & activity with all operator tours on Aftrip
                </h2>
                <p className="text-muted-foreground mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                    explicabo cupiditate
                </p>

                <section className = "bg-white shadow-lg mt-8">
                <div className="h-full flex items-center justify-center">
                  <div className="flex mt-4 space-x-2 bg-white p-4 rounded-md shadow-md text-black max-sm:hidden">
                    <DropTourComponent
                      datas={element}
                      onSelectedValue={handleItemSelected}
                    />
                    <div className="flex space-x-2">
                      <DropTourComponent
                        datas={destination}
                        onSelectedValue={handleDestinationItemSelected}
                      />
                      <DatePick />
                    </div>
                    <Button>Search</Button>
                  </div>
                </div>
            </section>
            </div>
     
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
            <FilterTour />
            
            <div className="col-span-1 md:col-span-3 ps-8">
             <p className = "text-sm">Circuits organized in <span className="font-bold">{circuit}</span>: <span className="font-bold">{totalCircuit}</span> circuits found</p>
              {circuits.map((circuit) => (
                <Card key={circuit.id} className="mb-4">
                  <div className="flex items-start">
                    <div className="flex flex-row">
                      <div className = "relative">
                        <Image height={600} width={600} src={circuit.image} alt={circuit.nameCircuit} className="w-60 h-60 object-cover rounded-lg"/>
                        <div className="bg-black opacity-70 absolute top-3 right-3 p-1 rounded">
                            <HeartIcon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                        

                        <div className="ml-4 py-2 w-128">
                            <div className = "flex flex-row justify-between">
                              <h3 className="text-lg font-bold">{circuit.nameCircuit}</h3>
                              <h4 className="text-lg font-bold">{circuit.price}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground font-semibold">By {circuit.operatorTour}</p>
                            <div className=" flex flex-row justify-start">
                              <div className = "flex flex-row justify-start">
                                  <SunIcon className = "w-4 h-4 text-muted-foreground mr-2 mt-1"/>
                                  <p className="text-sm text-muted-foreground"> {circuit.totalDay} -</p>
                              </div>

                              <div className="flex flex-row justify-start ms-2">
                                <MoonIcon className = "w-4 h-4 text-muted-foreground mr-2 mt-1"/>
                                <p className="text-sm text-muted-foreground"> {circuit.totalNight}</p>
                              </div>  
                            </div>
                            
                            <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                            explicabo cupiditateLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                            explicabo cupiditateLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                            explicabo cupiditateLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                            explicabo cupiditate Placeat explicabo cupiditat cupiditate...</p>
                          

                            <div className="flex justify-between mt-4">
                              <div className="flex justify-start mt-2">
                                  <RoadIcon className = "w-4 h-4 mr-2 mt-1"/>
                                  <p className="ms-1 text-sm">Travel distance : <span className = "font-bold">{circuit.distanceTrip}</span></p>
                              </div>

                              <Link href="/users/tour/trip">
                                <Button className="hover:opacity-80 text-sm font-semibold">Details</Button>
                              </Link>
                            </div>
                        </div>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="flex justify-center mt-8 gap-3">
                <Button
                  variant="outline"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                {[1, 2, 3, 4, 5, 6].map((p) => (
                  <Button
                    key={p}
                    variant={p === page ? "default" : "outline"}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setPage(page + 1)}
                  disabled={page === 6}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
        <FooterUser />
      </div>
    </>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
