import {ImageType} from "@/Types/ImageType";
import Image from "next/image";


interface GridProps {
    data: ImageType[];
}

export const Grid = ({data}:GridProps) => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 gap-y-4 lg:gap-x-8 lg:gap-y-6 mt-6">
            {data.map((item) => (
                <div key={item.id} className="flex flex-col items-center justify-center gap-3 px-6 py-8 hover:scale-105 transition">
                    <Image
                        src={item.url}
                        alt={item.title}
                        className="w-20 h-20 lg:w-12 lg:h-12 object-cover"
                    />
                    <h3 className="text-xl text-black font-bold mt-2 text-wrap overflow-ellipsis">{item.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{item.content}</p>
                </div>
            ))}
        </div>
    )
}