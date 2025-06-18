import {Pet} from './pet.model'

export class PetRepository {
    private pets: Map<string, Pet> = new Map();
    private static instance: PetRepository;

    private constructor() {
    }

    static getInstance(): PetRepository {
        if (!PetRepository.instance) {
            PetRepository.instance = new PetRepository();
        }

        return PetRepository.instance;
    }

    getPet(id: string): Pet | null {
        return this.pets.get(id) || null;
    }

    savePet(pet: Pet): void {
        this.pets.set(pet.id, pet);
    }
}
