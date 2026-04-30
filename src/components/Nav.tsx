import { Menu } from "iconoir-react";
import Logo from "/images/logo.png";
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import useSectionObserver from "../hooks/useSectionObserver";


export type LinkTypes = Array<{ name: string; link: string }>;
interface NavInterface {
    links: LinkTypes;
}
export default function Nav({ links }: NavInterface) {

    const [navHeight, setNavHeight] = useState<string>("h-20");
    const isLeavingHome = useSectionObserver("home", 0, '-100px 0px -100px 0px');
    const toggelNav = () => {
        if (navHeight === "h-20") setNavHeight("h-100");
        else if (navHeight === "h-100") setNavHeight("h-20");
    }

    if (typeof window !== "undefined") {
        useEffect(() => {
            const handleResize = () => {
                const sizeWidth = window.innerWidth;
                if (sizeWidth > 1024) setNavHeight("h-20");
            }
            window.addEventListener("resize", handleResize);

            return () =>{
                 window.removeEventListener('resize', handleResize);
                //  window.removeEventListener('scroll', handleScroll);
            }
        }, []);
    }
    return <nav className={` ${isLeavingHome ? 'colored' : 'blurred'} ${navHeight}  grid md:grid-cols-2 grid-cols-1 items-center p-3 fixed top-0 left-0 right-0   overflow-hidden`}>

        <div className="flex justify-between items-center grow ">
            <div className="grow max-md:flex max-md:gap-2 max-md:items-center">
                <div className="md:hidden block">
                    <Menu className="cursor-pointer" onClick={() => toggelNav()} />
                </div>
                <div className="w-16 h-16">
                    <a href="#home">
                        <img className="w-full h-full object-contain" src={Logo} alt="Kate Kors Logo" />
                    </a>
                </div>
            </div>
            {/* <div className="flex gap-4">
                <Heart />
                <Cart />
                </div> */}
        </div>
        <ul className="  max-md:row-start-2 md:flex md:justify-end">
            {
                links.map((val: any, index: number) => (
                    <li className="md:inline md:mx-4 max-md:text-center cursor-pointer  hover:text-accent" key={index} >
                        {/* <a className="max-md:py-5  max-md:block   w-full h-full" href={val.link}> {val.name}</a> */}
                        <HashLink
                            key={val.name}
                            to={val.link}
                            smooth
                            className="max-md:py-5  max-md:block   w-full h-full"
                        >
                            {val.name}
                        </HashLink>
                    </li>
                ))
            }
        </ul>


    </nav>
}