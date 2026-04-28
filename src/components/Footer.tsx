import { Copyright, Map,Phone } from "iconoir-react";
import type { LinkTypes } from "./Nav";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { IoMapSharp } from "react-icons/io5";
export default function Footer(){
    const links: LinkTypes = [
        { name : 'Home' , link : "#home"},
        { name : 'Shop' , link : "/shop"},
        { name : 'Collections' , link : "#collections"},
        { name : 'Contact' , link : "#contact"},
    ]
    return <footer className=" flex flex-col p-5">
        <div className="flex justify-between items-center mb-5">
            <div>
                <p className="font-inter-bold text-[24px]">Kate Kors</p>
                <button className="rounded-full bg-eclipse w-auto p-1.5 flex items-center justify-center">
                   <FaFacebookF/>
                </button>
            </div>
            <div>
                <p className="text-[16px] mb-3">CONTACT US</p>
                <div className="flex items-center gap-2 text-[14px] mb-2">
                   <FaPhoneAlt/>
                    <p>0995-0716-045</p>
                </div>
                <div className="flex items-center gap-2 text-[14px] mb-2">
                    <IoMapSharp/>
                    <p>Tuktukan, Guiguinto, Bulacan</p>
                </div>
            </div>
            <div>
                <ul className="text-[14px]">
                    { 
                        links.map( (val : any , index : number) => (
                            <li key={index} className="inline mx-2">
                                <a href={val.link}>{val.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div>
            <hr className="my-2 opacity-50"/>
            <div className="flex gap-2 float-right text-[12px]">
                <Copyright/>
                <p>2026. All Rights reserved.</p>
            </div>
        </div>
    </footer>
}