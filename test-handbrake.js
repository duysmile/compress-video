const hbjs = require('handbrake-js')
 
hbjs.spawn({
    input: 'video/sample.mp4',
    output: 'something.mp4',
    // preset: 'Very Fast 720p30',
    preset: 'Very Fast 480p30',
})
  .on('error', err => {
    // invalid user input, no video found etc
    console.error(err);
  })
  .on('progress', progress => {
    console.log(
      'Percent complete: %s, ETA: %s',
      progress.percentComplete,
      progress.eta
    )
  })