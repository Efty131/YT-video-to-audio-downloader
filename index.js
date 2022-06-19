const fs = require("fs");
const mp3 = require("youtube-mp3-downloader");
const ffmpeg = require("ffmpeg-static");
const yd = new mp3 ({
    ffmpegPath: ffmpeg,
    outputPath: './',
    youtubeVideoQuality: 'highestaudio'
})
let link = 'xu0ymAZvexo';
yd.download(link);