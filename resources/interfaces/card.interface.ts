import { ReactNode } from "react";
import { CARD_TYPES } from "../enums/card-type";

export interface CardProps {
    icon: ReactNode;
    title: String;
    value: number;
    type: CARD_TYPES;
}