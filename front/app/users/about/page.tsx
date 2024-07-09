import UserHeader from "@/components/UserHeader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StarIcon } from "@/components/icons";
import { HotelIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import FAQSection from '@/components/FAQSection';
import FooterUser from "@/components/FooterUser";

import roomServ from "../../../public/about/room-service.png";
import mission1 from "../../../public/about/mission1.png";
import mission2 from "../../../public/about/mission2.png";
import partner1 from "../../../public/about/tourisme.png";
import partner2 from "../../../public/about/ortana.png";
import staff from "../../../public/about/staff.png";

export default function AboutUs() {
    const avatarsData = [
        { src: "https://randomuser.me/api/portraits/men/32.jpg", fallback: "AB" },
        { src: "https://randomuser.me/api/portraits/women/44.jpg", fallback: "CD" },
        { src: "https://randomuser.me/api/portraits/men/45.jpg", fallback: "EF" },
        { src: "https://randomuser.me/api/portraits/women/46.jpg", fallback: "GH" },
    ];

    const avatarTotalUser = {src : "", fallback : "+400K"};

    return (
        <>
            <UserHeader />
            <main className="w-full px-14 mb-24 overflow-x-hidden">
            <div className="flex justify-center my-8">
                <div className="w-[48%] mt-8">
                    <h1 className = "text-4xl font-semibold text-[#305555]">Your reference guide for hotels, crafts and tour operators</h1>
                    <p className = "text-lg mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!</p>
                </div>

                <div className="w-[28%] bg-[#305555] rounded-full flex justify-center items-center max-md:hidden ms-4">
                    <Image src={roomServ} alt="Image de room service" width={400} height={400} className="object-cover w-3/4 h-3/4 aspect-square" />
                </div>
            </div>

            <section className = "mt-6 mb-12">
                <p className = "text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo</p>

                <div className="flex bg-[#e0ebe9] shadow-md w-[36%] h-15 justify-center items-center mx-auto mt-4 py-4">
                    <div className = "flex justify-start">
                        <h5 className="text-center">Ratings:</h5>
                        <StarIcon className="w-6 h-6 text-yellow-400 fill-yellow-400 ms-4" />
                        <p className = "font-bold ms-2">4.5</p>
                    </div>

                    <div className="flex -space-x-5 ms-3 mt-2">
                        {avatarsData.map((avatar, index) => (
                        <Avatar key={index}>
                        <AvatarImage
                            src={avatar.src}
                            alt={`Avatar ${index + 1}`}
                            className="w-7 h-7 rounded-full"
                        />
                        <AvatarFallback>{avatar.fallback}</AvatarFallback>
                        </Avatar>
                    ))}
                         <Avatar>
                            <AvatarFallback className="relative w-9 h-9 rounded-full bg-[#305555] text-center flex items-center justify-center text-white text-xs -mt-1">
                            {avatarTotalUser.fallback}
                            </AvatarFallback>   
                        </Avatar>
                    </div>

                    <Link href="#" className = "ms-5">
                        <Button className="bg-[#305555] hover:bg-[#305555] hover:opacity-80">Reviews</Button>
                    </Link>
                    
                </div>
            </section>

            <section className="grid mt-24 grid-cols-[40%_45%] gap-4 ms-8">
            <div className="flex items-center justify-center space-x-4 mt-6">
                <Image src={mission1} alt="value-img1" className="w-40 transform -translate-y-2" /> 
                <Image src={mission2} alt="value-img2" className="w-40 transform translate-y-2" /> 
            </div>

            <div>
                <h2 className="text-2xl font-medium">Vision : A full system to promote hotels, crafts and tour operators</h2>
                <p className="text-base mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!</p>
                <p className="text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium</p>
                <p className="text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium</p>
                <p className="text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium</p>
            </div>
            </section>

            <section className = "mt-20 mb-12">
                <h3 className = "font-semibold text-2xl text-center">Our partners from different establishment</h3>
                
                <div className="flex items-center justify-center space-x-4">
                    <Link href="#">
                        <Image src={partner1} alt="partner1" width={180} height={130} className="transform -translate-y-2" />
                    </Link>

                    <Link href="#">
                        <Image src={partner2} alt="partner2" width={150} height={100} className="transform translate-y-2" />    
                    </Link>

                    <Link href="#">
                        <Image src={partner1} alt="partner1" width={180} height={130} className="transform -translate-y-2" />
                    </Link>

                    <Link href="#">
                        <Image src={partner2} alt="partner2" width={150} height={100} className="transform translate-y-2" />    
                    </Link>                    
                </div>
            </section>

            <section className="grid mt-24 grid-cols-[45%_40%] gap-4 ml-32">
                <div>
                    <h2 className="text-2xl font-medium">Why booking on Aftrip ?</h2>
                    <div className="mt-6">
                        <div className = "flex justify-start">
                        <HotelIcon color = "black" width={24}/>
                        <h3 className = "text-lg font-medium ms-3">
                            Lorem ipsum emet si 
                        </h3>
                        </div>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!</p>
                    </div>
                  
                    <div className="mt-6">
                        <div className = "flex justify-start">
                        <HotelIcon color = "black" width={24}/>
                        <h3 className = "text-lg font-medium ms-3">
                            Lorem ipsum emet si 
                        </h3>
                        </div>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!</p>
                    </div>

                    <div className="mt-6">
                        <div className = "flex justify-start">
                        <HotelIcon color = "black" width={24}/>
                        <h3 className = "text-lg font-medium ms-3">
                            Lorem ipsum emet si 
                        </h3>
                        </div>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!</p>
                    </div>

                    <div className="mt-6">
                        <div className = "flex justify-start">
                        <HotelIcon color = "black" width={24}/>
                        <h3 className = "text-lg font-medium ms-3">
                            Lorem ipsum emet si 
                        </h3>
                        </div>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo cupiditate laboriosam blanditiis recusandae iste, nesciunt asperiores alias ratione accusantium!</p>
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-4 mt-6">
                    <Image src={staff} alt="staff" className = "rounded -mt-8"/> 
                </div>
            </section>
            </main>
            <FooterUser />
        </>
    )

}
