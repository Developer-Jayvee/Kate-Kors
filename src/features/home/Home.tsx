import { Fade } from "react-awesome-reveal";
import { HashLink } from "react-router-hash-link";


export default function Home(){

    return <div className="hero flex min-h-screen flex-col justify-center items-start px-10 w-full h-full">
        <Fade triggerOnce cascade delay={300} >
            <h1 className="font-bold">LUXURY</h1>
            <p className="leading-6 mb-8">Experience the finest craftsmanship and materials.</p>
           <HashLink to="#collections" className="text-white font-inter cursor-pointer hover:bg-accent bg-primary py-3 px-6 text-center text-inter-700 mt-9">EXPLORE</HashLink>
        </Fade>
    </div>
}