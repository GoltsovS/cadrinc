import {FfmpegCommand} from "fluent-ffmpeg";

export interface IPromisifyFfmpegCommand {
    success: boolean;
    err?: string;
}

export default (command: FfmpegCommand): Promise<IPromisifyFfmpegCommand> => {
    return new Promise((resolve, reject) => {
        command
            .on('error', (err) => {
                reject({ success: false, err: err.message});
            })
            .on('end', () => {
                resolve({ success: true });
            })
            .run();
    });
};