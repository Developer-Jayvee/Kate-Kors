import NewArrivalImg from "/images/shop/new-arrival.jpg";
import WatchImg from "/images/shop/watch-main.jpg";
import PerfumeImg from "/images/shop/perfume.jpg";
import HandBagImg from "/images/shop/hand-bag-main.jpg";
import Promise from "./Promise";
import CollectionCard from "./CollectionCard";

export default function Collections() {
    return <div className="w-full min-h-screen  grid grid-cols-1 auto-rows-auto gap-y-20  md:gap-y-0 my-10">
        <div className=" grid h-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-x-3 justify-items-center items-center ">
            <Promise icon="handshake" size={70} title="Secure Payment" description="We ensure secure payment"/>
            <Promise icon="handcoins" size={70} title="100% Money Back" description="30 days return policy"/>
            <Promise icon="bschat" size={70} title="Online Support" description="24/7 dedicated support"/>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:grid-rows-2 gap-x-8 gap-y-8 m-7">
            <CollectionCard title="New Arrivals" customClass="flex flex-col items-end sm:row-span-2 " collectionImg={NewArrivalImg}/>
            <CollectionCard title="Watch" customClass="sm:col-start-2 flex flex-col justify-end items-start" collectionImg={WatchImg} />
            <CollectionCard title="Fragrance" customClass=" sm:col-start-3 flex flex-col justify-end items-start " collectionImg={PerfumeImg} />
            <CollectionCard title="Handbag" customClass="  sm:col-start-2 sm:col-span-2 sm:row-start-2 flex flex-col items-end" collectionImg={HandBagImg} />
         
            
            
        </div>
    </div>
}