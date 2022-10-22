import { Package } from "./IPackage";

export interface Item {
    getName(): string;
    price(): number;
    package(): Package;
}







