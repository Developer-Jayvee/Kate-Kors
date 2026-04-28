import type { ElementType } from "react";

export type IconListTypes = "handshake" | "handcoins" | "bschat" | "navArrowRight";
export type IconTypes  = Record<IconListTypes,ElementType>;  
export interface IconInterface {
    icon : IconListTypes;
}