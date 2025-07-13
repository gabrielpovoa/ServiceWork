import OurServices from "@/components/OurServices/Services";
import Cases from "@/components/Cases/Cases";
import Talk from "@/components/GetInTouch/GetInTouch";
import Footer from "@/components/Footer/Footer";
import {VideoBanner} from "@/components/Banner/VideoBanner";
import ChatWhatsapp from "@/components/OverlayButton/Whatsapp";

export default function Home() {
    return (
        <main className="p-0 md:pt-2">
            <VideoBanner/>
            <OurServices/>
            <Cases/>
            <Talk/>
            <Footer/>
            <ChatWhatsapp/>
        </main>
    )
}
