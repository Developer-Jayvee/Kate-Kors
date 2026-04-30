import IconComponent from "../../components/IconComponent";
import type { IconListTypes } from "../../utils/iconTypes";


interface PromiseInterface {
    icon: IconListTypes;
    size?: number;
    title: string;
    description: string;
    customClass ?: string;
}
export default function Promise({
    icon, size = 11, title, description , customClass = ""
}: PromiseInterface) {
    return <div className={`flex flex-col items-center px-5 py-6 shadow-md rounded-lg ${customClass}`}>
        <div className="mb-4">
            <IconComponent size={size} name={icon}/>
        </div>
        <div className=" text-center">
            <h2 className="header mb-3">{title}</h2>
            <p className="secondary-header">{description}</p>
        </div>
    </div>
}