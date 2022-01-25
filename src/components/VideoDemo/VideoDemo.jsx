import "./VideoDemo.scss";
import { PosterBtn } from "../../assets/img";

const handleEvents = {
  //hidden overlay when click
  hiddenBtn: function () {
    const videoOverlay = document.querySelector(".video__overlay");
    videoOverlay.style.display = "none";
  },
};

const VideoDemo = (props) => {
  return (
    <div className="grid">
      <div
        className="video"
        style={{
          background: `url(${props.bgurl})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="video__title">{props.children}</div>
        <div className="responsive-video-poster">
          <button className="video__overlay">
            <div className="video__btn" onClick={handleEvents.hiddenBtn}>
              <img src={PosterBtn} alt="Not load" className="" />
            </div>
            <img src={props.poster} alt="Not load" className="video__poster" />
          </button>
          <iframe
            title="this is a video"
            src={props.path}
            // href={props.path}
            className="video__source"
            frameBorder="0"
            allow="autoplay; fullscreen;accelerometer;gyroscope;encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoDemo;
