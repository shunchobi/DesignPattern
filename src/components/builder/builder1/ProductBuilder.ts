import { CheeseBugger, TeriyakiBugger } from './Burgers';
import { Coke, Tea } from './Drinks';
import {BuggerSetProduct} from './Product'

export class ProductBuilder {
    makeTeriyakiBuggerSet(): BuggerSetProduct {
        const teriyakiBuggerSet = new BuggerSetProduct(
            'Teriyaki Bugger Set',
            [
                new TeriyakiBugger(),
                new Tea(),
            ]
        );
        return teriyakiBuggerSet;
    }

    makeCheesebugerSet(): BuggerSetProduct{
        const cheeseBuggerSet = new BuggerSetProduct(
            'Cheese Bugger Set',
            [
                new CheeseBugger(),
                new Coke(),
            ]
        );
        return cheeseBuggerSet;
    }
}