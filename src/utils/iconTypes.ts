import type { ElementType } from "react";

export type IconListTypes = "handshake" | "handcoins" | "bschat" | "navArrowRight" | "securePay" | "cashBack" | "shippingFast"; 
export type IconTypes  = Record<IconListTypes,ElementType>;  
export interface IconInterface {
    icon : IconListTypes;
}