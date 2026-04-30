import IconComponent from "../../components/IconComponent";


interface CollectionCardInterface {
    title: string;
    collectionImg: string;
    customClass?: string;
    iconSize?: number;
}
export default function CollectionCard({
    title, collectionImg, customClass = "", iconSize
}: CollectionCardInterface) {
    return <div className={`parent-div shadow-2xl rounded-lg transition-all delay-100  relative leading-6 p-4 ${customClass}`}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'}
    >
        <div className="absolute top-0 left-0 w-full h-full -z-10">
            <img
                src={collectionImg}
                alt={title}
                className="w-full h-full object-cover"
                loading="eager"
            />
             <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <h3 className="text-white mb-2">{title}</h3>
        <button className=" transition-transform  shop-btn cursor-pointer flex gap-1 items-center justify-end text-white font-inter mt-2">
            <span className="font-bold">Shop now</span>
            <IconComponent name="navArrowRight" size={iconSize} />
        </button>
    </div>
}