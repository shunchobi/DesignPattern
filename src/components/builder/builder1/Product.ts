import { Bugger, Drink } from "./BaseObjects";
import { Item } from "./IItem";

export class BuggerSetProduct {
    private name: string;
    private items: Item[];

    constructor(name: string, items: Item[]) {
        this.name = name;
        this.items = items;
    }

    getPrice(): number{
        let totalcost = 0;
        this.items.forEach(item => {
            totalcost += item.price();
        });
        return totalcost;
    }

    getName(): string{
        return this.name;
    }

    displyItems(): string{
        let itemNames = '';
        this.items.forEach(item => {
            itemNames += `${item.getName()}, `;
        });
        return `${this.name} = ${itemNames}`;
    }
}