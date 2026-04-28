import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

interface PageInterface { 
    children : ReactNode;
}
export default function Page( { children} : PageInterface){

    return <>
        <Nav/>
            {children}
        <Footer/>
    </>
}