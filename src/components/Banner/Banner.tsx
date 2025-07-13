import Link from "next/link";
import Cover from "@/../public/Banner.png";
import Logo from "@/components/Logo/Logo";

export const Banner = () => {
    return (
        <section
            className="
                container mx-auto flex flex-col items-start justify-between
                bg-cover bg-top md:filter md:brightness-75 md:saturate-75
                p-4 md:p-8 gap-4 shadow-md lg:rounded-2xl h-80 lg:h-[75vh]"
            style={{ backgroundImage: `url(${Cover.src})` }}>

            <Link href="/">
                <Logo classname="order-1" />
            </Link>

            <Link
                href="#OurServices"
                scroll={true}
                className="
                    uppercase font-semibold order-0 md:order-2 md:border-2 text-white border-white
                    rounded-full w-40 md:w-60 text-center px-3 py-2
                    hover:border-amber-400 md:bg-black/40 backdrop-blur-sm transition scroll-smooth">
                Find Out More
            </Link>
        </section>
    );
};
