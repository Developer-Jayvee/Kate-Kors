import Promise from "./Promise";
import { Fade } from "react-awesome-reveal";


export default function Collections() {
  return (
    <div className="w-full grid grid-cols-1 grid-rows-[auto_1fr] gap-y-5  lg:gap-y-20 my-10 p-4 ">
      <div className="flex flex-col items-center gap-20 ">
        <div className="text-center">
          <Fade fraction={0.2} >
            <h2 className="mb-3">What we offer</h2>
            <h4 className="text-center text-inter">Discover our exclusive collections and elevate your style with our curated selection of luxury fashion.</h4>
          </Fade>
        </div>
        <div className=" w-full grid   lg:grid-cols-3  gap-x-10 lg:justify-items-center items-center lg:gap-y-0 gap-y-10 ">
          <Fade fraction={0.2} cascade>
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
      </div>
    </div>
  );
}
