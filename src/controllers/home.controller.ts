import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from "../interfaces/IControllerBase.interface";
import path from 'path';

class HomeController implements IControllerBase {
    public path = '*';

    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path, this.index);
    }

    index = (req: Request, res: Response) => {
        // res.json({ 'message': `hello, i'm home controller`});
        res.sendFile(path.join(`${__dirname}/dist/client/index.html`));
    }
}

export default HomeController;