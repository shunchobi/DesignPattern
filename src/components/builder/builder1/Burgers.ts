import { Bugger } from "./BaseObjects";

export class TeriyakiBugger extends Bugger{
    getName(): string{
        return 'Teriyaki Bugger'
    }
    price(): number{
        return 600;
    }
}

export class CheeseBugger extends Bugger {
    getName(): string{
        return 'Cheese Bugger';
    }
    price(): number {
        return 300;
    }
}
