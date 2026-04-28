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
    return <div className={` grid grid-cols-[100px_1fr]  items-center gap-x-2 ${customClass}`}>
        <div className=" w-full justify-items-end">
            <IconComponent size={size} name={icon}/>
        </div>
        <div className="">
            <h2 className="header">{title}</h2>
            <p className="secondary-header">{description}</p>
        </div>
    </div>
}