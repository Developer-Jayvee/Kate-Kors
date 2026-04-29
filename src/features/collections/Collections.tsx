import NewArrivalImg from "/images/shop/new-arrival.jpg";
import WatchImg from "/images/shop/watch-main.jpg";
import PerfumeImg from "/images/shop/perfume.jpg";
import HandBagImg from "/images/shop/hand-bag-main.jpg";
import Promise from "./Promise";
import CollectionCard from "./CollectionCard";
import { Fade } from "react-awesome-reveal";

export default function Collections() {
  return (
    <div className="w-full min-h-screen  grid grid-cols-1 grid-rows-[auto_1fr] gap-y-5  md:gap-y-7 my-10 ">
      <div className=" grid   md:grid-cols-3  gap-x-3 md:justify-items-center items-center md:gap-y-0 gap-y-10 ">
        <Fade triggerOnce>
          <Promise
            icon="handshake"
            size={70}
            title="Secure Payment"
            description="We ensure secure payment"
          />
          <Promise
            icon="handcoins"
            size={70}
            title="100% Money Back"
            description="30 days return policy"
          />
          <Promise
            icon="bschat"
            size={70}
            title="Online Support"
            description="24/7 dedicated support"
          />

        </Fade>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 gap-x-8 gap-y-8 m-7">
        <Fade triggerOnce className="h-full md:row-span-2  " delay={700} >

        <CollectionCard
          title="New Arrivals"
          customClass="md:row-span-2 h-full  flex flex-col items-end "
          collectionImg={NewArrivalImg}
        />
        </Fade>
        <Fade triggerOnce className="h-full md:col-start-2 " delay={800} >
          <CollectionCard
            title="Watch"
            customClass="h-full md:col-start-2 flex flex-col items-end md:justify-end md:items-start"
            collectionImg={WatchImg}
          />

        </Fade>
        <Fade triggerOnce className="h-full md:col-start-3" delay={900}>
          <CollectionCard
            title="Fragrance"
            customClass="h-full md:col-start-3 flex flex-col items-end md:justify-end md:items-start "
            collectionImg={PerfumeImg}
          />
        </Fade>
         <Fade triggerOnce className="h-full  md:col-start-2 md:col-span-2" delay={1000}>
          <CollectionCard
            title="Handbag"
            customClass="h-full  md:col-start-2 md:col-span-2 md:row-start-1 row-start-2 flex flex-col items-end"
            collectionImg={HandBagImg}
          />

         </Fade>
      </div>
    </div>
  );
}
