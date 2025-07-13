"use client";

import Link from "next/link";
import { useState } from "react";
import { Banner } from "@/components/Banner/Banner";
import FooterLogo from "@/components/Logo/FooterLogo";

export const VideoBanner = () => {
    const [videoError, setVideoError] = useState(false);
    const path = "/WeldingRepair.mp4";

    const handleVideoError = () => setVideoError(true);

    if (videoError) return <Banner />;

    return (
        <section
            className="
            relative container mx-auto flex flex-col items-start justify-between
            bg-top p-4 md:p-8 gap-4  lg:rounded-2xl h-80 lg:h-[75vh]
            overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
                onError={handleVideoError}>
                <source src={path} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>

            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#840032] via-[#E59500] to-[#02040F] opacity-60" />

            <div className="relative z-10 flex flex-col items-start justify-between h-full w-full">
                <Link href="/">
                    <FooterLogo />
                </Link>

                <Link
                    href="#OurServices"
                    className="uppercase font-semibold order-0 md:order-2 md:border-2 text-white border-white rounded-full w-40 md:w-60 text-center px-3 py-2 hover:border-amber-400 md:bg-black/40 backdrop-blur-sm transition">
                    Saiba mais
                </Link>
            </div>
        </section>
    );
};
