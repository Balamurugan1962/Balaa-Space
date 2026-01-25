import { NAVBAR_ITEMS } from "../constants/NavBar_items";

export type NavBarItem = (typeof NAVBAR_ITEMS)[number];

export type NavBarItems = NavBarItem[];
