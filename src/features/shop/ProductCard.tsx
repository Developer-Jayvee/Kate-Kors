import { Heart, HeartSolid, Star, StarSolid } from "iconoir-react";

interface ProductImageInterface {
    imgStr : string;
    title : string;
    price : number;
}
export default function ProductCard({
    imgStr , title , price
} : ProductImageInterface) {
    return <div className=" flex flex-col gap-3 w-60 h-75 max-sm:w-40 max-sm:h-60  p-2  delay-200 cursor-pointer">
        <div className="grow overflow-hidden relative rounded-md hover:scale-101 transition-transform">
            <img src={imgStr} alt="sAMPLE" className=" grow h-full w-full object-fill object-center" />
            <Heart className="z-5 absolute top-1 right-2 cursor hover:scale-110 transition-transform" fontSize={13}/>
            <HeartSolid className={` hidden text-primary  z-5 absolute top-1 right-2 cursor hover:scale-110 transition-transform`} fontSize={13}/>
        </div>
        <div className="leading-8">
            <div className="flex gap-1 mb-2">
                <Star fontSize={9}/>
                <Star fontSize={9}/>
                <Star fontSize={9}/>
                <Star fontSize={9}/>
                <StarSolid fontSize={9}/>
            </div>
            <h2 className="font-inter font-bold text-[22px]">{title}</h2>
            <p className="font-inter text-[14px]"> {'\u20B1'} {price.toLocaleString()}</p>
        </div>
    </div>
}