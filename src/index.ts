import App from './app';
import * as bodyParser from 'body-parser';
import HomeController from './controllers/home.controller';
import UploadVideoController from './controllers/uploadVideo.controller';

const app = new App({
  port: parseInt(process.env.SERVER_PORT as string, 10) || 5000,
  controllers: [new HomeController(), new UploadVideoController()],
  middlewares: [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
});

app.listen();
