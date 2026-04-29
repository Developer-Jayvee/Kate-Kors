
interface ProductImageInterface {
    imgStr : string;
    title : string;
    price : number;
}
export default function ProductCard({
    imgStr , title , price
} : ProductImageInterface) {
    return <div className=" flex flex-col gap-3 w-50 h-55 shadow p-2 bg-white hover:scale-101 delay-200 transition-all cursor-pointer">
        <div className="h-40 overflow-hidden">
            <img src={imgStr} alt="sAMPLE" className=" grow h-full w-full object-cover" />
        </div>
        <div className="leading-7">
            <h2 className="font-inter text-[16px]">{title}</h2>
            <p className="font-inter text-[14px] font-bold"> {'\u20B1'} {price.toLocaleString()}</p>
        </div>
    </div>
}