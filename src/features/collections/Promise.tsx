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
    return <div className={`md:grid grid-cols-[auto_1fr] flex gap-2 justify-center   items-center justify-items-start gap-x-2 ${customClass}`}>
        <div className="  justify-items-end">
            <IconComponent size={size} name={icon}/>
        </div>
        <div className=" ">
            <h2 className="header">{title}</h2>
            <p className="secondary-header">{description}</p>
        </div>
    </div>
}