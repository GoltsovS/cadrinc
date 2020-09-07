import App from './app';
import * as bodyParser from 'body-parser';
import HomeController from "./controllers/home.controller";

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
    ],
    middlewares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ],
});

app.listen();