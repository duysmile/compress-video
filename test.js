const ffmpeg = require('fluent-ffmpeg');

// make sure you set the correct path to your video file
const proc = ffmpeg('video/sample.mp4')
  // set video bitrate
  .videoBitrate(1024)
  // set target codec
  .videoCodec('libx264')
  // set aspect ratio
  .aspect('16:9')
  // set size in percent
  .size('50%')
  // set fps
  .fps(24)
  // set audio bitrate
  .audioBitrate('128k')
  // set audio codec
  .audioCodec('libmp3lame')
  // set number of audio channels
  .audioChannels(2)
  // set output format to force
  .format('mp4')
  // setup event handlers
  .on('end', function() {
    console.log('file has been converted succesfully');
  })
  .on('error', function(err) {
    console.log('an error happened: ' + err.message);
  })
  // save to file
  .save('uploaded.mp4');
