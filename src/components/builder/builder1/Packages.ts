import { Package } from "./IPackage";

export class Wrapper implements Package{
    cost(): number{
        return 50;
    }
}

export class Bottle implements Package {
    cost(): number{
        return 100;
    }
}