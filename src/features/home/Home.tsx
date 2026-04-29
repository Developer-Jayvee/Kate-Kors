import { HashLink } from "react-router-hash-link";


export default function Home(){

    return <div className="hero flex min-h-screen flex-col justify-center items-start px-10 w-full h-full">
        <p >Style That</p>
        <p >Moves With You.</p>
        <HashLink to="/shop" className="font-inter cursor-pointer hover:bg-accent bg-primary p-2 px-5 text-center text-inter-700 mt-9">SHOP NOW</HashLink>
    </div>
}