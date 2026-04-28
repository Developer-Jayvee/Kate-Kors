import { Cart, Heart } from "iconoir-react";
import Logo from "/images/logo.png";
 

export type LinkTypes = Array<{ name : string ; link : string}>;
export default function Nav(){
    const links: LinkTypes = [
        { name : 'Home' , link : "#home"},
        { name : 'Shop' , link : "/shop"},
        { name : 'Collections' , link : "#collections"},
        { name : 'Contact' , link : "#contact"},
    ]
    return <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2">
        <ul className="">
            {
                links.map( (val : any , index : number) => (
                    <li className="inline mx-3 hover:text-accent" key={index}>
                        <a href={val.link}> {val.name}</a>
                    </li>
                ))
            }
        </ul>
        <div className="w-15 h-15">
            <img className="w-full h-full object-fill" src={Logo} alt="Kate Kors Logo"/>
        </div>
        <div className="flex gap-4">
            <Heart/>
            <Cart/>
        </div>
    </nav>
}