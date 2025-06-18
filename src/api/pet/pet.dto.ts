import {PetStatus} from "./pet.model";

export interface PetDto {
    id: string;
    name: string;
    age: number;
    health: number;
    hunger: number;
    mood: number;
    status: PetStatus;
}