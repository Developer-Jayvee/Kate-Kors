
interface ProductLinkInterface {
    onclick: ( type : string ) => void;
}
export default function ProductLinks({ onclick} : ProductLinkInterface) {

    return <ul className="flex gap-2 font-inter">
        <li className="cursor-pointer border rounded-md py-1 px-4 hover:bg-primary hover:text-white">
            <button type="button" onClick={() => onclick('all')}>
                <h5>All</h5>
            </button>
        </li>
        <li className="cursor-pointer border rounded-md py-1 px-4 hover:bg-primary hover:text-white ">

            <button type="button" onClick={() => onclick('Bag')}>
                <h5>Bags</h5>
            </button>
        </li>
        <li className="cursor-pointer border rounded-md py-1 px-4 hover:bg-primary hover:text-white ">

            <button type="button" onClick={() => onclick('Watch')}>
                <h5>Watch</h5>
            </button>
        </li>
        <li className="cursor-pointer border rounded-md py-1 px-4 hover:bg-primary hover:text-white ">

            <button type="button" onClick={() => onclick('others')}>
                <h5>Others</h5>
            </button>
        </li>
    </ul>
}