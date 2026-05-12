import { Fade } from "react-awesome-reveal";


export default function Collections() {
  return (
    <div className="w-full grid grid-cols-1 grid-rows-[auto_1fr] gap-y-5  lg:gap-y-20 my-10 p-4 ">
      <div className="flex flex-col items-center gap-20 ">
        <div className="text-center">
          <Fade fraction={0.2} triggerOnce >
            <h2 className="mb-3">What we offer</h2>
            <h4 className="text-center text-inter">Discover our exclusive collections and elevate your style with our curated selection of luxury fashion.</h4>
          </Fade>
        </div>
        
      </div>
    </div>
  );
}
