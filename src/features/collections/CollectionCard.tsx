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

    return <div className={`parent-div transition-all delay-100  leading-11 p-4 ${customClass}`}
        style={{
            backgroundImage: `url(${collectionImg})`,
            ...backgroundSettings
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor =  'rgba(0, 0, 0, 0.4)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor =  'rgba(0, 0, 0, 0.2)'}
        >
        <h2 className="font-inter font-bold text-lg-header text-white">{title}</h2>
        <button className=" transition-transform  shop-btn cursor-pointer flex gap-1 items-center justify-end text-white text-sm-inter">
            <span className="font-bold">Shop now</span>
            <IconComponent name="navArrowRight" size={iconSize} />
        </button>
    </div>
}