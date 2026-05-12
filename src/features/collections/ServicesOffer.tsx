import Promise from "./Promise";
import { Fade } from "react-awesome-reveal";


export default function ServicesOffer() {
    return <div className=" w-full grid   lg:grid-cols-3  gap-x-10 lg:justify-items-center items-center lg:gap-y-0 gap-y-10 ">
        <Fade fraction={0.2} cascade triggerOnce>
            <Promise
                icon="handshake"
                size={70}
                title="Secure Payment"
                description="Your transactions are protected with industry-standard encryption"
            />
            <Promise
                icon="handcoins"
                size={70}
                title="100% Money Back"
                description="Your satisfaction is our promise. Full refunds, simply and swiftly."
            />
            <Promise
                icon="bschat"
                size={70}
                title="Online Support"
                description="Need help choosing the perfect bag or scent? Reach out anytime"
            />

        </Fade>
    </div>
}