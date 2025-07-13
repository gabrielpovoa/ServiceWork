import Image from "next/image";
import Air from "@/../public/air.png"
import Bulb from "@/../public/bulbinstalling.png";
import Lawn from "@/../public/lawn.png";
import Security from "@/../public/security.png";
import RadioComsTower from "@/../public/radiocomstower.png";
import Banner from "@/../public/Banner.png";
import Lock from "@/../public/lockChanger.png";


export const ImageCases = () => {
    return (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <Image
                src={Banner}
                alt="Banner"
                className="w-full h-52 md:h-64 lg:h-full object-cover rounded-lg
                   col-span-2 lg:col-span-2 lg:row-span-2 "
            />
            <Image
                src={Air}
                alt="Welding"
                className="w-full h-52 md:h-64  object-cover rounded-lg"
            />

            <Image
                src={Bulb}
                alt="Bulb Aviation"
                className="w-full h-52 md:h-64  object-cover rounded-lg"
            />
            <Image
                src={Security}
                alt="Security"
                className="w-full h-52 md:h-64  object-cover rounded-lg"
            />
            <Image
                src={RadioComsTower}
                alt="Radio Communications Tower"
                className="w-full h-52 md:h-64  object-cover rounded-lg"
            />
            <Image
                src={Lock}
                alt="Welding 2"
                className="w-full h-52 md:h-64  object-cover rounded-lg col-span-2 lg:col-span-1"
            />
        </div>
    );
};
