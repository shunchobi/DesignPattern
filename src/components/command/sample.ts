

// class Observer {
//     private static subs: { [key: string]: ((value: number) => void)[] } = {}

//     public static subscribe(key: string, func: (value: number) => void) {
//         const current = this.getSubs(key);
//         current.push(func);
//         this.subs[key] = current;
//     }

//     // protected getSubs(key: string) {
//     //     if (!this.subs[key]) {
//     //         this.subs[key] = [];
//     //     }

//     //     return this.subs[key];
//     // }

//     public static publish(key: string, value: number) {
//         this.getSubs(key).forEach(func => {
//             func(value);
//         });
//     }
// }

// // event publisher
// Observer.publish("game:clear", 0);

// // event listener
// const eventHook = (value: number) => {
//     //123
// }
// Observer.subscribe("game:clear", eventHook);

// ------------


window.onabort


class Game {
    public gameClearHook: () => void;

    public constructor() {
        this.gameClearHook = () => { };
    }

    public trigger() {
        this.gameClearHook();
    }
}

const game = new Game();
game.gameClearHook = () => {
    console.log("hoge");
}
game.trigger();


