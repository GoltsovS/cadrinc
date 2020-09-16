import App from './app';
import * as bodyParser from 'body-parser';
import HomeController from './controllers/home.controller';
import UploadController from './controllers/upload.controller';

const app = new App({
  port: 5000,
  controllers: [new HomeController(), new UploadController()],
  middlewares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
});

app.listen();
