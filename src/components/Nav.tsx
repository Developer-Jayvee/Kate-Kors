import { Cart, Heart, Menu } from "iconoir-react";
import Logo from "/images/logo.png";
import { useEffect, useState } from "react";


export type LinkTypes = Array<{ name: string; link: string }>;
export default function Nav() {
    const links: LinkTypes = [
        { name: 'Home', link: "#home" },
        { name: 'Shop', link: "/shop" },
        { name: 'Collections', link: "#collections" },
        { name: 'Contact', link: "#contact" },
    ]
    const [navHeight , setNavHeight] = useState<string>("h-20");
    const toggelNav = () => {
        if(navHeight === "h-20") setNavHeight("h-100");
        else if(navHeight === "h-100") setNavHeight("h-20");
    }

    if(typeof window !== "undefined"){
        useEffect( () => {
            const handleResize = (e : UIEvent) => {
                  const sizeWidth = window.innerWidth;
    
                  if(sizeWidth > 1024) setNavHeight("h-20");

            }
            window.addEventListener("resize",handleResize);
            
            return () => window.removeEventListener('resize',handleResize);
        }, []);
    }
    return <nav className={` ${navHeight}  grid lg:grid-cols-2 grid-cols-1 items-center p-3 fixed top-0 left-0 right-0   overflow-hidden`}>

        <ul className="  max-lg:row-start-2">
            {
                links.map((val: any, index: number) => (
                    <li className="lg:inline lg:mx-4 max-lg:text-center cursor-pointer  hover:text-accent" key={index} >
                        <a className="max-lg:py-5  max-lg:block   w-full h-full" href={val.link}> {val.name}</a>
                    </li>
                ))
            }
        </ul>
        <div className="flex justify-between items-center grow ">
            <div className="grow max-lg:flex max-lg:gap-2 max-lg:items-center">
                <div className="lg:hidden block">
                    <Menu className="cursor-pointer" onClick={() => toggelNav()} />
                </div>
                <div className="w-16 h-16">
                    <a href="#home">
                        <img className="w-full h-full object-contain" src={Logo} alt="Kate Kors Logo" />
                    </a>
                </div>
            </div>
            <div className="flex gap-4">
                <Heart />
                <Cart />
            </div>

        </div>

    </nav>
}