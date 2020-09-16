import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import path from 'path';
const { DIST } = require('../../vars/paths');

class HomeController implements IControllerBase {
  public path = '/';

  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.index);
  }

  index = (req: Request, res: Response) => {
    res.sendFile(path.join(DIST.CLIENT, 'index.html'));
  };
}

export default HomeController;
