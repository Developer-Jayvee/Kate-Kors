import ProductCard from "./ProductCard";
import { type ProductInterface, Products } from '../../constant/products'
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductLinks from "./productLinks";

export default function FeaturedProducts() {
    const [productImages, setProductImages] = useState<ProductInterface[]>([]);
    const listImages = useRef<ProductInterface[]>([])
    const currentFiltered = useRef<string>("All");
    useEffect(() => {
        const abort = new AbortController;
        const setImages = () => {
            listImages.current = Products;
            setProductImages([...Products])
        }
        setImages();
        return () => abort.abort();
    }, [])

    const filterList = (type : string) => {
        currentFiltered.current = type;
        setProductImages(() =>
            listImages.current.filter((val: any) => {
                if(type === "All") return val.name !== "";
                if(type === "Others") return ['Perfume','Wallet'].includes(val.category)
                return val.category === type;
            })
        );
    }
    return <Fade triggerOnce fraction={0.5} >
        <div className="flex flex-col  my-20 ">
            <div className="flex max-md:flex-col lg:justify-between  items-center px-5">
                <div className=" lg:w-[40%]">
                    <h2 className="max-md:text-center">Our Collections</h2>
                    <h6 className="max-md:text-center mb-10  block  mt-10 text-2xl  text-secondary font-inter">Discover our carefully selected collection of standout products, chosen for their quality, style, and everyday value to help you find your next favorite with ease.</h6>
                </div>
                <div className="">
                    <ProductLinks active={currentFiltered.current} onclick={(type : string) => filterList(type) } />
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
                <div className=" bg-white py-4 px-6 text-secondary  flex max-md:flex-col items-center gap-10 font-inter">
                    <div className="border border-secondary rounded-full p-4">
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