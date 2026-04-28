import type { ElementType } from "react";
import { BsChat } from "react-icons/bs";
import {  LuHandCoins, LuHandshake } from "react-icons/lu";
import type { IconInterface, IconListTypes, IconTypes } from "./iconTypes";
import { NavArrowRight } from "iconoir-react";



const IconList : IconTypes = {
    "handshake" : LuHandshake,
    "handcoins" : LuHandCoins,
    "bschat" : BsChat,
    "navArrowRight" : NavArrowRight
}
export const ReactIconType = ({ icon } : IconInterface) => typeof IconList?.[icon];
export const ReactIcon = (icon : IconListTypes)  : ElementType => IconList?.[icon];