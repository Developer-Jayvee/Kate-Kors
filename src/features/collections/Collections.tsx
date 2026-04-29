import NewArrivalImg from "/images/shop/new-arrival.jpg";
import WatchImg from "/images/shop/watch-main.jpg";
import PerfumeImg from "/images/shop/perfume.jpg";
import HandBagImg from "/images/shop/hand-bag-main.jpg";
import Promise from "./Promise";
import CollectionCard from "./CollectionCard";

export default function Collections() {
  return (
    <div className="w-full min-h-screen  grid grid-cols-1 grid-rows-[auto_1fr] gap-y-5  md:gap-y-7 my-10">
      <div className=" grid   md:grid-cols-3  gap-x-3 md:justify-items-center items-center md:gap-y-0 gap-y-10 ">
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
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 gap-x-8 gap-y-8 m-7">
        <CollectionCard
          title="New Arrivals"
          customClass="md:row-span-2   flex flex-col items-end "
          collectionImg={NewArrivalImg}
        />
        <CollectionCard
          title="Watch"
          customClass="md:col-start-2 flex flex-col items-end md:justify-end md:items-start"
          collectionImg={WatchImg}
        />
        <CollectionCard
          title="Fragrance"
          customClass=" md:col-start-3 flex flex-col items-end md:justify-end md:items-start "
          collectionImg={PerfumeImg}
        />
        <CollectionCard
          title="Handbag"
          customClass="  md:col-start-2 md:col-span-2 md:row-start-1 row-start-2 flex flex-col items-end"
          collectionImg={HandBagImg}
        />
      </div>
    </div>
  );
}
