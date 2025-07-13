'use client'

import Image from 'next/image'
import {useEffect, useState} from 'react'
import ForstTech from '@/../public/forstTech.png'
import RopeAccess from '@/../public/ropeAccess.png'

const Partner = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    const logos = [ForstTech, RopeAccess, ForstTech, RopeAccess]

    return (
        <section className=" bg-white px-6 py-4 container mx-auto flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-8 ">
                {logos.map((img, idx) => (
                    <div
                        key={idx}
                        className="p-2 flex items-center justify-center w-40 h-20 shadow-inner rounded-md bg-[#EDEBD7] hover:scale-105 transition duration-300">
                        <Image
                            src={img}
                            alt={`Logo duplicate ${idx}`}
                            width={120}
                            height={60}
                            className="h-auto w-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Partner
