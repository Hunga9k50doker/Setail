
import './banner.scss';

const Banner = (props) => {
  return (
    <div className="ban" style={{ background:`url(${props.bgUrl})`}}>
      <img srcSet={props.img} alt="Not found" />
      <div className="content">
      <h5 className="subTitle">{props.subTitle}</h5>
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>    
      </div>
    </div>
  );
};
export default Banner;
