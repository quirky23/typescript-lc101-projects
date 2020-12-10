import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    //cargoItems: Array<Cargo>;
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sumMass: number = 0;
        for (let i =0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
    }

    currentMassKg(): number {
        let currentMassKg: number = 0;
        currentMassKg = this.sumMass + 
    }
}