import ProductCard from "./ProductCard";
import { Products } from '../../constant/products'
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FeaturedProducts() {
    const [productImages, setProductImages] = useState({});

    useEffect(() => {
        const abort = new AbortController;
        const setImages = () => {
            setProductImages(Products)
        }

        setImages();

        return () => abort.abort();
    }, [])
    return <Fade triggerOnce fraction={0.5} >
        <div className="flex flex-col items-center my-20 ">
            <div className="flex justify-center w-full px-5">
                <div className="text-center lg:w-[50%]">
                    <h2 >Our Collections</h2>
                    <h6 className="mb-10  block text-center mt-10 text-2xl  text-secondary font-inter">Discover our carefully selected collection of standout products, chosen for their quality, style, and everyday value to help you find your next favorite with ease.</h6>
                </div>
                <div className="">
                    {/* <ProductLinks /> */}
                </div>

            </div>

            <div className="mt-12 w-full overflow-x-auto no-scrollbar px-5">
                <div className="flex md:grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:w-full flex-nowrap gap-4 w-max">
                    {Object.values(productImages).map((img : any, index : number) => (
                        <ProductCard
                            key={index}
                            imgStr={img.image}
                            title={img.name}
                            price={img.price}
                            category={img.category}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <div className=" bg-white py-4 px-6  flex max-md:flex-col items-center gap-10 font-inter">
                    <div className="border rounded-full p-4">
                        <IoBagHandleOutline size={30}/>
                    </div>
                    <div className="max-md:text-center">
                        <p className="font-bold text-lg">Message our shop for more products.</p>
                        <p className="text-sm">Discover more styles, collections and exclusive offers.</p>
                    </div>
                    <a  target="_blank" href="https://www.facebook.com/kate.kors.2024" className="flex gap-2 items-center bg-primary hover:bg-accent cursor-pointer text-white  p-4 rounded-full">
                        <span> Message Our Shop </span>
                        <FaArrowRightLong/>
                    </a>
                </div>
            </div>
        </div>
    </Fade>

}