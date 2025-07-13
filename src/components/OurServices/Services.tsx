import {Data} from "@/Data/Services";
import {Grid} from './Grid'
import {HeadingTitle} from "@/components/Heading/HeadingTitle";

const OurServices = () => {
    return (
        <section id="OurServices" className="px-6 py-4 container mx-auto flex flex-col items-center justify-center">
            <HeadingTitle title="Our Services"/>
            <div className="flex items-center justify-center">
                <Grid data={Data} />
            </div>
        </section>
    );
};

export default OurServices;
