const spawn = require('child_process').spawn;

const tempFilePath = './video/sample.mp4';
const convertedFile = 'converted.mp4';

// ffmpeg -i h264.mp4 -c:v copy -bsf:v h264_mp4toannexb -an out.h264
const ffmpeg = spawn('ffmpeg', ['-i', tempFilePath, '-c:v', 'copy', '-bsf:v', 'h264_mp4toannexb', '-an', convertedFile]);

ffmpeg.on('exit', (statusCode) => {
    if (statusCode === 0) {
        console.log('conversion successfully');
    }
});

ffmpeg.stderr.on('data', (error) => {
    console.error(error);
});
