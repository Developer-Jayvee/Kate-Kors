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
    const backgroundSettings = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backgroundBlendMode: 'multiply'
    }

    return <div className={`parent-div shadow-2xl rounded-lg transition-all delay-100   leading-6 p-4 ${customClass}`}
        style={{
            backgroundImage: `url(${collectionImg})`,
            ...backgroundSettings
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor =  'rgba(0, 0, 0, 0.4)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor =  'rgba(0, 0, 0, 0.2)'}
        >
        <h3 className="text-white mb-2">{title}</h3>
        <button className=" transition-transform  shop-btn cursor-pointer flex gap-1 items-center justify-end text-white font-inter mt-2">
            <span className="font-bold">Shop now</span>
            <IconComponent name="navArrowRight" size={iconSize} />
        </button>
    </div>
}