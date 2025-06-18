import {randomUUID} from 'crypto';
import {PetDto} from "./pet.dto";
import {clearInterval} from "node:timers";

export type PetStatus = 'alive' | 'sick' | 'dead';

export class Pet {

    id: string;
    name: string;
    protected age: number = 0;
    protected health: number = 100;
    protected hunger: number = 0;
    protected mood: number = 100;
    protected status: PetStatus = 'alive';

    private interval?: NodeJS.Timeout;

    constructor(name: string) {
        this.id = randomUUID();
        this.name = name;
        this.startLife();
    }

    protected updateStatus(): void {
        if (this.health <= 0 || this.hunger >= 100) {
            this.status = 'dead';
        } else if (this.health <= 30) {
            this.status = 'sick';
        } else {
            this.status = 'alive';
        }
    }

    isDead(): boolean {
        return this.status === 'dead';
    }

    protected startLife(): void {
        if (this.interval) return;

        this.interval = setInterval(() => {
            this.updateState();

            if (this.isDead()) {
                this.stopLife();
            }
        }, 60000);
    }

    protected stopLife(): void {
        if(this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }

    getStatus(): PetStatus {
        return this.status;
    }

    protected updateState(): void {
        if (this.isDead()) return;

        this.age += 1;
        this.setHunger(this.hunger + 3);

        if (this.hunger > 70) {
            this.setHealth(this.health - 5);
        } else {
            this.setHealth(this.health - 2);
        }

        this.setMood(Math.round((this.health + (100 - this.hunger)) / 2));

        this.updateStatus();
    }

    getAge(): number {
        return this.age;
    }

    getHunger(): number {
        return this.hunger;
    }

    setHunger(value: number): void {
        this.hunger = value;

        if (this.hunger < 0) {
            this.hunger = 0;
        }

        if (this.hunger > 100) {
            this.hunger = 100;
        }

        this.updateStatus();
    }

    getHealth(): number {
        return this.health;
    }

    setHealth(value: number): void {
        this.health = value;

        if (this.health > 100) {
            this.health = 100;
        }

        if (this.health < 0) {
            this.health = 0;
        }

        this.updateStatus();
    }

    getMood(): number {
        return this.mood;
    }

    setMood(value: number): void {
        this.mood = value;

        if (this.mood > 100) {
            this.mood = 100;
        }
        if (this.mood < 0) {
            this.mood = 0;
        }

        this.updateStatus();
    }

    toDto(): PetDto {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            health: this.health,
            hunger: this.hunger,
            mood: this.mood,
            status: this.status
        }
    }
}



