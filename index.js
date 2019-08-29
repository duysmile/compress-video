const spawn = require('child_process').spawn;

const tempFilePath = './video/Avengers.Endgame.2019.Vsub.1080p.BrRip.6CH.x265.HEVC-PSA.mkv';
const convertedFile = 'converted.mp4';

// ffmpeg -i h264.mp4 -c:v copy -bsf:v h264_mp4toannexb -an out.h264
const ffmpeg = spawn('ffmpeg', [
    '-i',
    tempFilePath,
    '-c:v',
    'copy',
    '-bsf:v',
    'h264_mp4toannexb',
    '-an',
    '-b:v',
    '5M',
    '-framerate',
    '30',
    convertedFile
]);

// const cmd = `ffmpeg -i ${tempFilePath} -aspect 16:9 -vf scale=-2:720 -c:v libx264 -crf 0 -preset veryslow -c:a copy ${convertedFile}`;
// const ffmpeg = spawn('ffmpeg', cmd.split(' '));

// console.log(cmd);

const begin = Date.now();
ffmpeg.on('exit', (statusCode) => {
    if (statusCode === 0) {
        console.log('conversion', Date.now() - begin);
        console.log('conversion successfully');
    }
});

ffmpeg.stderr.on('data', (error) => {
    console.error(error.toString());
});
