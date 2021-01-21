import express from 'express';
import { Application } from 'express';
const { DIST } = require('../vars/paths'); // eslint-disable-line

class App {
  public app: Application;

  public port: number;

  constructor(appInit: { middlewares: any; port: number; controllers: any; databaseConnect: any }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middlewares);
    this.routes(appInit.controllers);
    this.assets();
    this.dbConnect(appInit.databaseConnect);
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void }) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private assets() {
    this.app.use(express.static(DIST.CLIENT));
  }

  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare);
    });
  }

  private dbConnect(callback: () => void) {
    callback();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the localhost:${this.port}`);
    });
  }
}

export default App;
