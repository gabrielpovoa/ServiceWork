import FooterLogo from "@/components/Logo/FooterLogo";
import Link from "next/link";

const Footer = () => {
    const url = "https://joao-povoa-filho.vercel.app"

    return (
        <footer className="px-6 py-4 container mx-auto flex  flex-col items-center justify-center bg-[#045045] xl:rounded-t-2xl">
            <div>
                <FooterLogo />
            </div>
            <span className="text-white text-center font-semibold text-xs"> Developed by <Link href={url} className="hover:text-amber-400 hover:underline">João Póvoa</Link> - {new Date().getFullYear()}</span>
        </footer>
    );
};

export default Footer;
