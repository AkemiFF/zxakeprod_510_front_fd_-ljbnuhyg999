// components/CustomCard.tsx
import React from 'react';
import Image from 'next/image';
import { CardContent } from '@/components/ui/card';
import Schema1 from "../public/asset-login/Beautiful hotel insights details.png";
import Schema2 from "../public/asset-login/Breakfast on a wooden table with a natural view.png";
import Schema3 from "../public/asset-login/Hand pressing receptionist's bell.png";
import Schema4 from "../public/asset-login/Hotel lobby.png";

const CustomCard = () => {
    return (
        <CardContent className="flex-1 p-8 bg-[#3d5a5b] text-white mx-10 max-sm:hidden">
            <div className="flex items-center justify-center gap-2">
                <Image
                    src={Schema3}
                    alt="Image 1"
                    width={60}
                    height={40}
                    className="col-span-1 aspect-[4/10]"
                />
                <Image
                    src={Schema4}
                    alt="Image 2"
                    width={60}
                    height={40}
                    className="mt-20 aspect-[4/10]"
                />
                <Image
                    src={Schema2}
                    alt="Image 3"
                    width={60}
                    height={40}
                    className="mt-20 max-h-30 aspect-[4/10]"
                />
                <Image
                    src={Schema1}
                    alt="Image 4"
                    width={60}
                    height={40}
                    className="aspect-[4/10]"
                />
            </div>
            <p className="text-center italic text-lg mb-4 mt-10">
                Lorem ipsum dolor emet si tu acquiem perma!
            </p>
            <p className="text-center text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                explicabo cupiditate laboriosam blanditiis recusandae iste,
                nesciunt asperiores alias ratione.
            </p>
        </CardContent>
    );
};

export default CustomCard;
