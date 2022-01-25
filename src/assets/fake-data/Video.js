const poster_01 = require("../img/imgVideo/travelBgMp4.jpg").default;
const poster_02 = require("../img/imgVideo/bgAboutUsMp4.jpg").default;
const poster_03 = require("../img/imgVideo/winterBgMp4.jpg").default;

const poster_btn = require("../img/imgVideo/btnYoutube.png").default;

const bgVideo_01 = require("../img/imgVideo/bgVideoTravel.jpg").default;

const VideoData = [
  {
    id: "video_home_travel",
    img: poster_01,
    path: "https://player.vimeo.com/video/71319358?h=8d0e4ac080&badge=0",
    poster_btn: poster_btn,
    bgUrl: bgVideo_01,
  },

  {
    id: "video_about_us",
    img: poster_02,
    path: "https://player.vimeo.com/video/65727879",
    poster_btn: poster_btn,
    bgUrl: "",
  },
  {
    id: "video_winter_travel",
    img: poster_03,
    path: "https://www.youtube.com/embed/xd39Ho1kfqc",
    poster_btn: poster_btn,
    bgUrl: "",
  },
];

export default VideoData;
