import { Link } from "react-router-dom";


export default function ProductLinks() {

    return <ul className="flex gap-2 font-inter">
        <li className="border rounded-md py-1 px-4 hover:bg-primary hover:text-white">
            <Link to="">
                <h5>Latest Product</h5>
            </Link>
        </li>
        <li className="border rounded-md py-1 px-4 hover:bg-primary hover:text-white ">

            <Link to="">
                <h5>Top Rating</h5>
            </Link>
        </li>
        <li className="border rounded-md py-1 px-4 hover:bg-primary hover:text-white ">

            <Link to="">
                <h5>Best Sellers</h5>
            </Link>
        </li>
    </ul>
}