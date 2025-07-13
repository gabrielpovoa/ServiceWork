import {Banner} from "@/components/Banner/Banner";
import OurServices from "@/components/OurServices/Services";
import Cases from "@/components/Cases/Cases";
import Talk from "@/components/GetInTouch/GetInTouch";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return(
      <main className="p-0 md:pt-2">
          <Banner/>
          <OurServices/>
          <Cases/>
          <Talk/>
          <Footer/>
      </main>
  )
}
