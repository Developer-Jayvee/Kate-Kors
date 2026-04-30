import { HashLink } from "react-router-hash-link";
import PopularityImg from "/images/popularity.png";

export default function About() {

    return <div className=" grid grid-cols-1  lg:grid-cols-2 max-md:gap-y-4 mb-10 w-full my-10  p-4">
        <div>
            <h2 className="mb-3">About Us</h2>
            <h4 className="mb-1">
                Welcome to Kate Kors, where everyday elegance meets attainable luxury. Based in the heart of Balagtas, Bulacan, we are a proud provider of premium women's accessories, including designer-inspired bags, sophisticated watches, luxurious perfumes. 
              
            </h4>
            <h4 className="mb-8">
                  At Kate Kors, we believe that every woman deserves to feel empowered and chic, without compromising on quality or style. Whether you're looking for your next signature scent, a timeless timepiece, or a statement bag that turns heads, Kate Kors brings global luxury right to your doorstep.
            </h4>
             <HashLink to="#collections" className="text-white font-inter cursor-pointer hover:bg-accent bg-primary py-3 px-6 text-center text-inter-700 mt-9">EXPLORE</HashLink>
        </div>
        <div>
            <img src={PopularityImg} alt="Popularity" className="w-full h-full object-cover rounded-lg" />
        </div>
    </div>
}