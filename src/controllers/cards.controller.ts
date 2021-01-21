import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import { videoCards, pictureCards } from '../api.routes';
import { CardModel } from '../database/models/cards';

class CardsController implements IControllerBase {
  public videoCardsPath = videoCards;

  public pictureCardsPath = pictureCards;

  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.videoCardsPath, this.videoCards);
    this.router.get(this.pictureCardsPath, this.pictureCards);
  }

  videoCards = async (req: Request, res: Response) => {
    const cardList = await CardModel.findByType('video');
    res.send({ cardList });
  };

  pictureCards = async (req: Request, res: Response) => {
    const cardList = await CardModel.findByType('picture');
    res.send({ cardList });
  };
}

export default CardsController;
