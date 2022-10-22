import { Drink } from "./BaseObjects";

export class Coke extends Drink{
    getName(): string {
        return 'Coke';
    }
    price(): number {
        return 120;
    }
}

export class Tea extends Drink{
    getName(): string {
        return 'Tea';
    }
    price(): number {
        return 100;
    }
    
}