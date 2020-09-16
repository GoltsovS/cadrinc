import ffmpeg from 'fluent-ffmpeg';

export default (filePath: string, outputFilePath: string, originalFilename: string) =>
  ffmpeg()
    .input(filePath)
    .noAudio()
    .videoFilters('setpts=0.7*PTS')
    .videoFilters('fps=7')
    .output(`${outputFilePath}/${new Date()}-${originalFilename}`)
    .run();
