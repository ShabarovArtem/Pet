import {Request, Response} from "express";
import {PetService} from "./pet.service";

export class PetController {
    private petService = new PetService()

    async getPet(req: Request, res: Response) {
        const {id} = req.body;
        const pet = this.petService.getPet(id);
        res.send(pet.toDto());
    }

    async createPet(req: Request, res: Response) {
        const {name} = req.body;
        const newPet = this.petService.createPet(name);
        res.send(newPet.toDto());
    }

    async feedPet(req: Request, res: Response) {
        const {id} = req.body;
        const updatePet = this.petService.feedPet(id);
        res.send(updatePet.toDto());
    }

    async healPet(req: Request, res: Response) {
        const {id} = req.body;
        const updatePet = this.petService.healPet(id);
        res.send(updatePet.toDto());
    }

    async playWithPet(req: Request, res: Response) {
        const {id} = req.body;
        const updatePet = this.petService.playWithPet(id);
        res.send(updatePet.toDto());
    }
}