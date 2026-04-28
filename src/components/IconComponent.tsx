import { ReactIcon } from "../utils/icon.types";
import type { IconListTypes } from "../utils/iconTypes";


interface IconsInterface {
    name : IconListTypes;
    size ?: number;
}
export default function IconComponent({
    name , size
} : IconsInterface){
    const IconComponent = ReactIcon(name);
    return <IconComponent size={size} />   
}