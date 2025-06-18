import {Pet} from "./pet.model";
import ApiError from "../../errors/ApiError";
import {PetRepository} from "./pet.repository";

export class PetService {
    private readonly repository = PetRepository.getInstance();

    private checkDeath(pet: Pet) {
        if (pet.isDead()) {
            throw ApiError.Conflict('Pet is dead')
        }
    }

    getPet(id: string): Pet {
        const pet = this.repository.getPet(id);
        if (!pet) {
            throw ApiError.NotFound('Pet not found')
        }
        this.checkDeath(pet);
        return pet;
    }

    createPet(name: string): Pet {
        const newPet = new Pet(name);

        this.repository.savePet(newPet);

        return newPet;
    }

    feedPet(id: string): Pet {
        const pet = this.getPet(id);

        pet.setHunger(pet.getHunger() - 30);
        pet.setMood(pet.getMood() + 10);

        this.repository.savePet(pet);

        this.checkDeath(pet);
        return pet;
    }

    healPet(id: string): Pet {
        const pet = this.getPet(id);

        pet.setHealth(pet.getHealth() + 20);
        pet.setHunger(pet.getHunger() - 10);

        this.repository.savePet(pet);

        this.checkDeath(pet);
        return pet;
    }

    playWithPet(id: string): Pet {
        const pet = this.getPet(id);

        pet.setMood(pet.getMood() + 15);
        pet.setHunger(pet.getHunger() + 5);

        this.repository.savePet(pet);

        this.checkDeath(pet);
        return pet;
    }

}