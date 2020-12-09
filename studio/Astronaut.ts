import { Payload } from './Payload';
//let payload: Payload;
export class Astronaut implements Payload {

    massKg: number;
    name: string;

    constructor(massKg: number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }

}