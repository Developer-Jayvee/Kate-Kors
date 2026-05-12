import { FaFacebook } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { CiPhone } from "react-icons/ci";
export default function Footer() {
    return <footer className=" flex max-md:flex-col justify-center items-center gap-2 md:gap-10 p-5 font-inter">
      <div className="max-md:mb-2">
        <a href="#home" className="border border-white px-6 py-2 hover:scale-105 transition-transform font-bold">
            KATE KORS
        </a>
      </div>
      <div className=" border border-white h-10 bg-white max-md:hidden"></div>
      <div className="flex gap-2 items-center">
        <LuMapPin size={20}/>
        <p>Tuktukan, Guiguinto, Bulacan </p>
      </div>
        <div className=" border border-white h-10 bg-white max-md:hidden"></div>
      <div className="flex gap-2 items-center">
        <CiPhone size={20}/>
        <p>0995-0716-045</p>
      </div>
        <div className=" border border-white h-10 bg-white max-md:hidden"></div>
      <div>
        <a  href="https://www.facebook.com/kate.kors.2024" target="_blank">
            <FaFacebook className="hover:scale-105 transition-transform" size={20}/>
        </a>
      </div>
    </footer>
}