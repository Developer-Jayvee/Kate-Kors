import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav, { type LinkTypes } from "./Nav";

interface PageInterface { 
    children : ReactNode;
}
export default function Page( { children} : PageInterface){
    const links: LinkTypes = [
        { name: 'Home', link: "#home" },
        { name: 'Services', link: "#services" },
        { name: 'Collections', link: "#collections" },
        { name: 'About Us', link: "#about" },
    ]
    return <div className="select-none ">
        <Nav links={links}/>
            {children}
        <section id="contact">
            <Footer/>
        </section> 
    </div>
}