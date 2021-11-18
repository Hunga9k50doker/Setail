import "./VideoDemo.scss";
import { PosterTravel, PosterBtn } from "../../assets/img";
const video = {
  poster: PosterTravel,
  posterBtn: PosterBtn,
};

const handleEvents = {
  hiddenBtn: function () {
    const videoOverlay = document.querySelector(".video__overlay");
    videoOverlay.style.display = "none";
  },
};

const VideoDemo = () => {
  return (
    <div className="grid">
      <div className="video">
        <h3>Go & Discover</h3>
        <h2>Breathtaking Cities</h2>
        <p>
          Sollst geliebet es helle trübhell heimat, stillestehn du warum nicht
          heut hast mein heut im.
        </p>
        <div className="responsive-video-poster">
          <button className="video__overlay">
            <div className="video__btn" onClick={handleEvents.hiddenBtn}>
              <img src={video.posterBtn} alt="Not load" className="" />
            </div>
            <img src={video.poster} alt="Not load" className="video__poster" />
          </button>
          <iframe
            title="this is a video"
            src="https://player.vimeo.com/video/71319358?h=8d0e4ac080&badge=0"
            className="video__source"
            frameborder="0"
            allow="autoplay; fullscreen;accelerometer;gyroscope;encrypted-media; picture-in-picture"
            allowFullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoDemo;
