import Promise from "./Promise";
import { Fade } from "react-awesome-reveal";


export default function ServicesOffer() {
    return <div className=" w-full grid   lg:grid-cols-4  gap-x-10 lg:justify-items-center items-center lg:gap-y-0 gap-y-10 ">
        <Fade fraction={0.2} direction="up" cascade triggerOnce>
            <Promise
                icon="shippingFast"
                title="Free Delivery"
                description="Selected Area Only"
            />
            <Promise
                icon="securePay"
                title="Secure Payment"
                description="Secure transactions guaranteed"
            />
            <Promise
                icon="cashBack"
                title="100% Money Back"
                description="Risk-free shopping"
            />
            <Promise
                icon="bschat"
                title="24/7 Support"
                description="Fast online assistance"
            />

        </Fade>
    </div>
}