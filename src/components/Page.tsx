import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

interface PageInterface { 
    children : ReactNode;
}
export default function Page( { children} : PageInterface){

    return <div className="select-none  mt-19">
        <Nav/>
            {children}
        <Footer/>
    </div>
}