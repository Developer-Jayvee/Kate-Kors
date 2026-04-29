import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav, { type LinkTypes } from "./Nav";

interface PageInterface { 
    children : ReactNode;
}
export default function Page( { children} : PageInterface){
    const links: LinkTypes = [
        { name: 'Home', link: "#home" },
        { name: 'Shop', link: "/shop" },
        { name: 'Collections', link: "#collections" },
        { name: 'Contact', link: "#contact" },
    ]
    return <div className="select-none  mt-19">
        <Nav links={links}/>
            {children}
        <section id="contact">
            <Footer/>
        </section> 
    </div>
}