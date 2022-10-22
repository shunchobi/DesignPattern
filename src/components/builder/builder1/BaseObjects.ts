import { Item } from "./IItem";
import { Package } from "./IPackage";
import { Bottle, Wrapper } from "./Packages";

export abstract class Bugger implements Item {
    package(): Package{
        return new Wrapper();
    }
    abstract getName(): string;
    abstract price(): number;
}



export abstract class Drink implements Item{
    package(): Package{
        return new Bottle();
    }
    abstract getName(): string;
    abstract price(): number;
}
