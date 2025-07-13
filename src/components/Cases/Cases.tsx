import {HeadingTitle} from "@/components/Heading/HeadingTitle";
import {ImageCases} from "@/components/Cases/ImageCases";

const Cases = () => {
    return (
        <section className="px-6 py-4 container mx-auto flex  flex-col items-center justify-center">
            <HeadingTitle title="What we Offer"/>

            <div>
                <ImageCases />
            </div>
        </section>
    )
}

export default Cases;