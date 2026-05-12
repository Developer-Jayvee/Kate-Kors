

interface ProductCardInterface {
    imgStr : string;
    title : string;
    price : number;
    category : string;
}
export default function ProductCard({
    imgStr , title , price , category
} : ProductCardInterface) {

    return <div className="transition-all p-2 w-80 md:w-70 h-130 md:h-105 overflow-hidden font-inter">
        <div className="rounded-sm h-70  w-full overflow-hidden">
            <img src={imgStr} className="rounded-2xl object-center w-full h-full" />
        </div>
        <div className="px-2 mt-2">
            <p className="text-gray-500 text-sm mb-1">{category}</p>
            <p className="font-bold text-lg mb-2 truncate">{title}</p>
            <p>{"\u20B1"} {price}</p>
        </div>
    </div>
}