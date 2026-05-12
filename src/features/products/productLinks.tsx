
interface ProductLinkInterface {
    onclick: ( type : string ) => void;
    active : string;
}
export default function ProductLinks({ onclick , active } : ProductLinkInterface) {
    const links : Array<{ name : string; }> = [
        { name :"All" },
        { name :"Bag" },
        { name :"Watch" },
        { name :"Others" },
    ]
    return <ul className="flex gap-2 font-inter">
        {
            links.map( (link : any , index: number) => (
                <li key={index} onClick={() => onclick(link.name)} className={` ${active === link.name ? 'bg-primary text-white' : ''} cursor-pointer border rounded-md py-1 px-4 hover:bg-primary hover:text-white`}>
                    <button type="button" className="cursor-pointer"  >
                        <h5>{link.name}</h5>
                    </button>
                </li>
            ))
        }
     
    </ul>
}