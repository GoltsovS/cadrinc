import * as express from 'express';
import multer from 'multer';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import FileConvert from '../middleware/fileConvert';
import promisifyCommand from '../middleware/promisifyFfmpegCommand';
import { IValidateFile } from '../interfaces/IUpload.interface';
const { UPLOADS } = require('../../vars/paths'); // eslint-disable-line
const allowedMimetypes = require('../../vars/mimetypes'); // eslint-disable-line

const storage = multer.diskStorage({
  destination(req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
    callback(null, UPLOADS);
  },
  filename(req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
});

class UploadController implements IControllerBase {
  public path = '/upload';

  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post(this.path, upload.single('video'), this.index);
  }

  index = async (req: Request, res: Response) => {
    const { file, query } = req;
    const { convertType } = query;

    if (!file) {
      res.send({
        success: false,
        error: 'Не удалось загрузить файл',
      });
      return;
    }

    const { valid, message } = this.validate(file);

    if (!valid) {
      res.send({ success: false, error: message });
      return;
    }

    const fileConvert = new FileConvert(file.path, file.destination, file.originalname);

    if (convertType == 'reverse') {
      const reverse = promisifyCommand(fileConvert.reverseVideo());
      reverse
        .then((data) => {
          if (data.err) {
            return data.err;
          }
          res.send({ success: true });
        })
        .catch((error) => {
          res.send({ success: false, error });
        });
    }

    if (convertType == 'cadring') {
      const cadring = promisifyCommand(fileConvert.changeFrameRate());
      cadring
        .then((data) => {
          if (data.err) {
            return data.err;
          }
          res.send({ success: true });
        })
        .catch((error) => {
          res.send({ success: false, error });
        });
    }

    if (convertType == 'boomerang') {
      const boomerang = promisifyCommand(fileConvert.boomerang());
      boomerang
        .then((data) => {
          if (data.err) {
            return data.err;
          }
          res.send({ success: true });
        })
        .catch((error) => {
          res.send({ success: false, error });
        });
    }
  };

  validate = (file: Express.Multer.File): IValidateFile => {
    if (!allowedMimetypes.includes(file.mimetype)) {
      return {
        valid: false,
        message: `Не поддерживаем ${file.mimetype}`,
      };
    }

    if (file.size >= 104857600) {
      return {
        valid: false,
        message: 'Максимальный размер файла 100Мб',
      };
    }

    return { valid: true };
  };
}

export default UploadController;
