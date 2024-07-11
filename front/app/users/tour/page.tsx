"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FooterUser from "@/components/FooterUser";
import UserHeader from "@/components/UserHeader";

import ExclusiveTour from "@/app/users/tour/ExclusiveTour";

import { commandListReducer, tour } from "@/app/type";
import DropTourComponent from "@/components/front/search/DropTourComponent";
import { DatePick } from "@/components/DatePick";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import img1 from "../../../public/tour/img1.png";
import img2 from "../../../public/tour/img2.png";
import img3 from "../../../public/tour/img3.png";
import img4 from "../../../public/tour/img4.png";
import groupie from "../../../public/tour/voyage-groupe.png";

export default function OperatorTour() {
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


  const exclusiveTour: tour[] = [
    {
      id: 1,
      operatorTour: "ZTrip Mada",
      circuitTour: "Escapade à Belo Tsiribihina",
      villeTour: "Tsirihibina",
      descriptionsTour: "Lorem ipsum dovoluptate repellat...", 
      responsableTour: "Mr Daniel",
      prixTour : "$235",
      imageTour: img1.src,
      nuiteeTour : "4 jours",
      jourTour : "5 jours",
      dateCreated: "2024-01-01T00:00:00Z",
      dateUpdate: "2024-01-01T00:00:00Z",
    },
    {
      id: 2,
      operatorTour: "ZTrip Mada",
      circuitTour: "Escapade à Belo Tsiribihina",
      villeTour: "Tsirihibina",
      descriptionsTour: "Lorem ipsum dovoluptate repellat...", 
      responsableTour: "Mr Daniel",
      imageTour: img1.src,
      prixTour : "$235",
      nuiteeTour : "4 jours",
      jourTour : "5 jours",
      dateCreated: "2024-01-01T00:00:00Z",
      dateUpdate: "2024-01-01T00:00:00Z",
    },
    {
      id: 3,
      operatorTour: "ZTrip Mada",
      circuitTour: "Escapade à Belo Tsiribihina",
      villeTour: "Tsirihibina",
      descriptionsTour: "Lorem ipsum dovoluptate repellat...", 
      responsableTour: "Mr Daniel",
      prixTour : "$23",
      imageTour: img1.src,
      nuiteeTour : "4 jours",
      jourTour : "5 jours",
      dateCreated: "2024-01-01T00:00:00Z",
      dateUpdate: "2024-01-01T00:00:00Z",
    },
    {
      id: 4,
      operatorTour: "ZTrip Mada",
      circuitTour: "Escapade à Belo Tsiribihina",
      villeTour: "Tsirihibina",
      descriptionsTour: "Lorem ipsum dovoluptate repellat...", 
      responsableTour: "Mr Daniel",
      prixTour : "$23",
      imageTour: img1.src,
      nuiteeTour : "4 jours",
      jourTour : "5 jours",
      dateCreated: "2024-01-01T00:00:00Z",
      dateUpdate: "2024-01-01T00:00:00Z",
    },
  ];

    return (
      <>  
        <UserHeader />
        <main className="w-full mb-24 overflow-x-hidden mt-6 md:ps-14 md:pe-8">
            <section className = "lg:flex lg:flex-row justify-center items-center">
              <div className="w-100">
                  <h1 className="text-4xl font-bold mb-6 text-[#305555]">Liven up your trip with tour operators</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid facere maiores quia cupiditate, quos sint animi quaerat possimus ipsa sapiente. </p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid facere maiores quia cupiditate, quos sint animi quaerat possimus ipsa sapiente. </p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid facere maiores quia cupiditate, quos sint animi quaerat possimus ipsa sapiente. </p>
              
                  <Link href="/users/tour/result/">
                        <Button className="hover:opacity-80 mt-12 text-lg">Explore all operators</Button>
                  </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className=" group relative overflow-hidden w-full">
                    <Image src={img1} alt="value-img1" className="w-72 h-48 max-sm:ms-10 transition-transform duration-300 group-hover:scale-105" /> 
                    <div className="absolute bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 w-72 h-48  ">
                      <h3 className="text-lg font-semibold text-primary-foreground w-64">
                        Adventure & pleasure
                      </h3>
                      <p className="text-sm text-white w-64">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, error.</p>
                    </div>
              </div>

                <div className=" group relative overflow-hidden w-full">
                    <Image src={img2} alt="value-img2" className="w-72 h-48  max-sm:ms-10 transition-transform duration-300 group-hover:scale-105" /> 
                    <div className="absolute bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 w-72 h-48  ">
                      <h3 className="text-lg font-semibold text-primary-foreground w-64">
                        Adventure & pleasure
                      </h3>
                      <p className="text-sm text-white w-64">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, error.</p>
                    </div>
                </div>
                
                <div className=" group relative overflow-hidden w-full">
                    <Image src={img3} alt="value-img3" className="w-72 h-48 max-sm:ms-10 transition-transform duration-300 group-hover:scale-105" /> 
                    <div className="absolute bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 w-72 h-48  ">
                      <h3 className="text-lg font-semibold text-primary-foreground w-64">
                        Adventure & pleasure
                      </h3>
                      <p className="text-sm text-white w-64">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, error.</p>
                    </div>
                </div>

                <div className=" group relative overflow-hidden w-full">
                    <Image src={img4} alt="value-img4" className="w-72 h-48 max-sm:ms-10 transition-transform duration-300 group-hover:scale-105" /> 
                    <div className="absolute bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 w-72 h-48  ">
                      <h3 className="text-lg font-semibold text-primary-foreground w-64">
                        Adventure & pleasure
                      </h3>
                      <p className="text-sm text-white w-64">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, error.</p>
                    </div>
                </div>

            </div>

            </section>

            <section className="mt-24">
                <h2 className="font-semibold text-center text-xl">Find operators tour here</h2>

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

            <section className="grid mt-24 sm:grid-cols-1 md:grid-cols-[30%_67%] gap-4 ms-8">
            <div className = "ms-12 mt-8">
                <h2 className="text-2xl font-medium">Visit tourist destinations at your leisure</h2>
                <p className="text-base mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!</p>
                <p className="text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium</p>
            </div>

            <div className="md:flex md:items-center md:justify-between space-x-4 mt-6 md:ps-8">
                <div className=" group relative overflow-hidden w-full">
                  <Image src={img1} alt="value-img1" className="w-96 h-96 max-sm:ms-10 transition-transform duration-300 group-hover:scale-105" /> 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 w-96">
                    <h3 className="text-xl font-semibold text-primary-foreground">
                      Adventure & pleasure
                    </h3>
                  </div>
                </div>

                <div className=" group relative overflow-hidden w-full">
                  <Image src={img2} alt="value-img1" className="w-96 h-96 max-sm:ms-10 transition-transform duration-300 group-hover:scale-105" /> 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 w-96">
                    <h3 className="text-xl font-semibold text-primary-foreground">
                      Adventure & pleasure
                    </h3>
                  </div>
                </div>
            
            </div>
            </section>

            <section className="mt-24">
              <div>
                <h2 className="text-center text-xl font-semibold">Our top & favourite expeditions</h2>
                <p className="mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quo.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {exclusiveTour.map((tour) => (
                  <ExclusiveTour
                    key={tour.id}
                    id={tour.id}
                    operatorTour={tour.operatorTour}
                    circuitTour={tour.circuitTour}
                    villeTour={tour.villeTour}
                    descriptionsTour={tour.descriptionsTour}
                    responsableTour={tour.responsableTour}
                    prixTour={tour.prixTour}
                    imageTour={tour.imageTour}
                    nuiteeTour={tour.nuiteeTour}
                    jourTour={tour.jourTour}
                    dateCreated={tour.dateCreated}
                    dateUpdate={tour.dateUpdate}
                  />
                ))}
              </div>
            </section>

            <section className="grid mt-20 grid-cols-2 gap-4 ml-12 flex justify-center items-center">
                <div className="flex items-center justify-center space-x-4 mt-6">
                    <Image src={groupie} alt="groupie" className = "rounded w-96"/> 
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">Enjoy group trips...</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!</p>

                    <Link href="#">
                        <Button className="bg-[#305555] hover:bg-[#305555] hover:opacity-80 mt-6">See group circuits</Button>
                    </Link>
                </div>
            </section>

            <section className="pt-24 px-16">
              <div>
                <h2 className="text-2xl font-semibold">Popular operator tours</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quo.</p>
              </div>

              <div className="pt-6 pb-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Link
                href="users/tour"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              >
                <Image
                  height={600}
                  width={600}
                  src="/tour/tourDago.png"
                  alt="Accommodation"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    TourDago
                  </h3>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              >
                <Image
                  height={600}
                  width={600}
                  src="/tour/madcameleon.png"
                  alt="Accommodation"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    MadCameleon
                  </h3>
                </div>
              </Link>
              <Link
                href="#"
                className="group relative overflow-hidden rounded-lg shadow-lg"
                prefetch={false}
              >
                <Image
                  height={600}
                  width={600}
                  src="/tour/lahimena.png"
                  alt="Accommodation"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    Lahimena Tour
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
            </section>
        </main>

        <FooterUser />
      </> 
    )
}

