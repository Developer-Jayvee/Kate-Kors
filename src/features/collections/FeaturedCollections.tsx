import { Fade } from "react-awesome-reveal";
import CollectionCard from "./CollectionCard";
import NewArrivalImg from "/images/shop/new-arrival.jpg";
import WatchImg from "/images/shop/watch-main.jpg";
import PerfumeImg from "/images/shop/perfume.jpg";
import Accessories from "/images/shop/accessories.jpg";

export default function FeaturedCollections() {
  return (
    <div className="min-h-screen grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 gap-x-8 gap-y-8  p-4">
      <Fade fraction={0.2} className="h-full lg:row-span-2  ">
        <CollectionCard
          title="Carry confidence wherever you go"
          customClass="lg:row-span-2 h-full  flex flex-col items-start gap-2 "
          collectionImg={NewArrivalImg}
        />
      </Fade>
      <Fade fraction={0.2} className="h-full lg:col-start-2 ">
        <CollectionCard
          title="Timeless style, every second."
          customClass="h-full lg:col-start-2 flex flex-col items-start gap-2"
          collectionImg={WatchImg}
        />
      </Fade>
      <Fade fraction={0.2} className="h-full lg:col-start-3" >
        <CollectionCard
          title="Leave a scent they'll remember."
          customClass="h-full lg:col-start-3 flex flex-col items-start gap-2 "
          collectionImg={PerfumeImg}
        />
      </Fade>
      <Fade
        fraction={0.2}
        className="h-full  lg:col-start-2 lg:col-span-2"
       
      >
        <CollectionCard
          title="Small details, big statement"
          customClass="h-full  lg:col-start-2 lg:col-span-2 lg:row-start-1 row-start-2  flex flex-col items-start gap-2"
          collectionImg={Accessories}
        />
      </Fade>
    </div>
  );
}
