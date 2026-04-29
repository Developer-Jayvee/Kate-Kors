import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import DualRangeSlider from "../../components/Slider";
import Categories from "./Categories";
import ColorFilter from "./ColorFilter";
import PriceSlider from "./PriceSlider";
import ProductCard from "./ProductCard";
import Perfume from "/images/shop/perfume.jpg";
export default function Shop() {
    const categories = ['Handbag', 'Backpack', 'Watches', 'Perfume', 'Others'];
    const colors = ['black','blue','red']
    return <div className="min-h-full h-full flex flex-col">
        <Nav />
        <main className="flex-1 mt-19.5  grid grid-cols-[300px_1fr] h-full min-h-0  gap-x-10  px-20 py-10 bg-shopBg">
            <div className="flex flex-col gap-7 p-4  bg-white h-full w-full border border-borderColor">
                <Categories categories={categories} />
                <PriceSlider/>
                <ColorFilter colors={colors}/>
            </div>
            <div className=" overflow-auto min-h-0 h-full">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                    <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
                    <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
                </div>
            </div>
        </main>
        <Footer />
    </div>
}