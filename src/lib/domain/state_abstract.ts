export abstract class State {}

export class Loading extends State {}

export class Data extends State {
    public name: string;

    public constructor(name: string) {
        super(); 
        this.name = name;  
    }
} 

export class Fail extends State {}