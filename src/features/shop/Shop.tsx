import Nav, { type LinkTypes } from "../../components/Nav";
import Categories from "./Categories";
import ColorFilter from "./ColorFilter";
import PriceSlider from "./PriceSlider";
import ProductCard from "./ProductCard";
import Perfume from "/images/shop/perfume.jpg";
export default function Shop() {
  const categories = ["Handbag", "Backpack", "Watches", "Perfume", "Others"];
  const colors = ["black", "blue", "red"];
  const links: LinkTypes = [
    { name: "Home", link: "/#home" },
    { name: "Shop", link: "/shop" },
    { name: "Collections", link: "/#collections" },
    { name: "Contact", link: "/#contact" },
  ];
  return (
    <div className="min-h-full h-full flex flex-col">
      <Nav links={links} />
      <main className="overflow-auto mt-19.5 flex-1 grid grid-cols-[300px_1fr] max-lg:grid-cols-1 max-md:grid-rows-[310px_1fr] max-lg:gap-y-10 h-full min-h-0 gap-x-10 px-4 md:px-8 lg:px-20 py-10 bg-shopBg">
        <div className="flex flex-col md:gap-7 max-md:gap-7  p-4 max-w-full lg:max-w-75 w-full lg:w-75 bg-white h-full border border-borderColor shadow-2xl">
          <div className="overflow-x-auto overflow-y-hidden  lg:overflow-visible">
            <div className="min-w-max lg:min-w-0">
              <Categories categories={categories} />
            </div>
          </div>

          <PriceSlider />

          <div className="overflow-x-auto  overflow-y-hidden lg:overflow-visible">
            <div className="flex gap-2 min-w-max lg:min-w-0 lg:flex-wrap">
              <ColorFilter colors={colors} />
            </div>
          </div>
        </div>

        {/* Products grid - unchanged */}
        <div className="overflow-auto min-h-0 h-full">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
            <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
            <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
            <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
            <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
            <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
            <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
            <ProductCard imgStr={Perfume} title="Perfume" price={5000} />
            {/* More products */}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
