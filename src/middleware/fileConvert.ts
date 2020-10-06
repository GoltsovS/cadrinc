import ffmpeg, { FfmpegCommand } from 'fluent-ffmpeg';

export interface IFileConvert {
  changeFrameRate: (fps: number) => FfmpegCommand;
  reverseVideo: (audio: boolean) => FfmpegCommand;
  boomerang: (params: { loopCount: number; duration: number | undefined }) => FfmpegCommand;
}

export default class FileConvert implements IFileConvert {
  filePath: string;

  outputFilePath: string;

  originalFilename: string;

  constructor(filePath: string, outputFilePath: string, originalFilename: string) {
    this.filePath = filePath;
    this.outputFilePath = outputFilePath;
    this.originalFilename = originalFilename;
  }

  private command = ffmpeg();

  changeFrameRate = (fps = 10) => {
    return this.command
      .input(this.filePath)
      .inputOptions('-r 80')
      .noAudio()
      .videoFilter(`fps=${fps}`)
      .output(`${this.outputFilePath}/${new Date()}-${this.originalFilename}`);
  };

  reverseVideo = (audio = true) => {
    const outputPath = `${this.outputFilePath}/${new Date()}-${this.originalFilename}`;
    return this.command
      .input(this.filePath)
      .audioFilters(audio ? 'areverse' : '')
      .videoFilter('reverse')
      .output(outputPath);
  };

  boomerang = ({ loopCount = 1, duration = 0 }) => {
    const outputPath = `${this.outputFilePath}/${new Date()}-${this.originalFilename}`;
    const frameRate = 25;
    return this.command
      .input(this.filePath)
      .noAudio()
      .complexFilter([
        '[0]reverse[r]',
        `[0][r]concat,loop=${loopCount}:${2 * frameRate * duration},setpts=N/${frameRate}/TB`,
      ])
      .output(outputPath);
  };
}
