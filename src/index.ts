import App from './app';
import * as bodyParser from 'body-parser';
import HomeController from './controllers/home.controller';
import UploadVideoController from './controllers/uploadVideo.controller';
import CardsController from './controllers/cards.controller';
import { databaseConnect } from './database/connect';

const app = new App({
  port: parseInt(process.env.SERVER_PORT as string, 10) || 5000,
  controllers: [new UploadVideoController(), new CardsController(), new HomeController()],
  middlewares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
  databaseConnect,
});

app.listen();
