import type { ElementType } from "react";
import { BsChat } from "react-icons/bs";
import {  LuHandCoins, LuHandshake } from "react-icons/lu";
import type { IconInterface, IconListTypes, IconTypes } from "./iconTypes";
import { NavArrowRight } from "iconoir-react";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbCashMoveBack } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";



const IconList : IconTypes = {
    "handshake" : LuHandshake,
    "handcoins" : LuHandCoins,
    "bschat" : BsChat,
    "navArrowRight" : NavArrowRight,
    "securePay" : RiSecurePaymentLine,
    "cashBack" : TbCashMoveBack,
    "shippingFast" : FaShippingFast
}
export const ReactIconType = ({ icon } : IconInterface) => typeof IconList?.[icon];
export const ReactIcon = (icon : IconListTypes)  : ElementType => IconList?.[icon];