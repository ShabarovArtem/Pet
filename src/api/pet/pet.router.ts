import {Request, Response, Router} from "express";
import {PetController} from "./pet.controller";

const router = Router();
const petController = new PetController();

router.get('/', async (req: Request, res: Response) => {
    await petController.getPet(req, res)
});

router.post('/', async (req: Request, res: Response) => {
    await petController.createPet(req, res)
});

router.post('/feed', async (req: Request, res: Response) => {
    await petController.feedPet(req, res)
});

router.post('/heal', async (req: Request, res: Response) => {
    await petController.healPet(req, res)
});

router.post('/play', async (req: Request, res: Response) => {
    await petController.playWithPet(req, res)
});

export {router};