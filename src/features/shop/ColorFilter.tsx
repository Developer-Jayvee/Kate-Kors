

interface ColorFilterInterface {
    colors : string[];
}
export default function ColorFilter({
    colors
} : ColorFilterInterface){
    return  <div>
                    <p className="font-inter font-bold leading-9">COLOR</p>
                    <ul className="max-lg:flex max-lg:gap-5 max-lg:ml-5">
                        {
                            colors.map( (val: any ) => (
                                <li className="flex items-center gap-2 mb-2">
                                    <input type="checkbox" id={val}/>
                                    <label className="font-inter text-[14px] select-none" htmlFor={val}>{val}</label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
}