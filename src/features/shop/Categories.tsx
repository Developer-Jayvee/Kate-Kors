
interface CategoriesInterface {
    categories : string[];
}
export default function Categories({
    categories
} : CategoriesInterface){
    return  <div>
                <p className="font-inter font-bold leading-9">CATEGORIES</p>
                <ul>
                    {
                        categories.map( (val:string) => (
                            <li className="mb-2">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="border-0 outline-0" id={val}/>
                                    <label className="font-inter text-[14px]" htmlFor={val}>{val}</label >
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
}