import "./BlogItem.scss";
import { Link } from "react-router-dom";

import { to_slug, get_random } from "../../utils/utils";
import {
  productBan,
  BanElementsTour,
  BanBlogPage,
  BlogOne,
  BlogTwo,
  BlogThree,
  BlogFour,
  BlogFive,
  BlogSix,
  BlogSeven,
  BlogEight,
  BlogNine,
} from "../../assets/img";

const blogData = [
  {
    id: "1",
    img: BlogOne,
    title: "Letters From Florida",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 7, 2016",
  },
  {
    id: "2",
    img: BlogTwo,
    title: "Down Town",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 6, 2016",
  },
  {
    id: "3",
    img: BlogThree,
    title: "Photography",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 5, 2016",
  },
  {
    id: "4",
    img: BlogFour,
    title: "It’s Time To Travel",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 4, 2016",
  },
  {
    id: "5",
    img: BlogFive,
    title: " Inspired By Food",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 3, 2016",
  },
  {
    id: "6",
    img: BlogSix,
    title: "Old Town",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 2, 2016",
  },
  {
    id: "7",
    img: BlogSeven,
    title: "Hiking",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 1, 2016",
  },
  {
    id: "8",
    img: BlogEight,
    title: "Charming Murals",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 1, 2016",
  },
  {
    id: "9",
    img: BlogNine,
    title: "Blue Is My Color",
    content:
      "Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
    time: "December 1, 2016",
  },
];
const tag = ["camera", "city", "fun", "summer", "travel", "winter"];
const BlogItem = (props) => {
  return (
    <article className="blog-item">
      <Link to={"/detail/" + to_slug(props.blog.title)}>
        <div className="header__img">
          <img src={props.blog.img} alt={`blog-img-${props.blog.id}`} />
        </div>
      </Link>
      <div className="blog__body__item">
        <h3 className="type__category">{props.blog.type}</h3>
        <h4 className="title">{props.blog.title}</h4>
        <p className="blog__content">{props.blog.content}</p>
        <p className="description">
          Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam
          invenire iracundia vim. En eam dico similique, ut sint posse sit, eum
          sumo diam ea. Liber consectetuer in mei, sea in imperdiet assueverit
          contentiones, an his cibo blandit tacimates. Iusto iudicabit similique
          id velex, in sea rebum deseruisse appellantur. Lorem ipsum Alienum
          phaedrum torquatos nec eu, vis detraxit pericu in mei, vix aperiri vix
          at,dolor sit amet. blandit dicant definition.Sit delicata persequeris
          ex, in sea rebum deseruisse appellantur. Lorem ipsum dolor sit
          amet.Eos ei nisl graecis, vix aperiri consequat an. Eius lorem. <br />
          <br />
          <p className="heightline__desc">
            “Ei elit omnes impedit ius, vel et hinc agam fabulas. Ut audiamre
            iracundia vim. An eame, ut sint posse sumo diam ea. Cu omnis.”
          </p>
          <br /> Ei elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam
          invenire iracundia vim. An eam dico similique, ut sint posse sit, eum
          sumo diam ea. Liber consectetuer in mei, sea in imperdiet assueverit
          contentiones, an his cibo blandit tacimates. Iusto iudicabit similique
          idefinitionem eos an.Sit delicata persequeris ex, in sea rebum
          deseruisse appellantur. Lorem ipsum dolor si vix aperiri consequat an.
        </p>

        <div className="row ">
          <div className="col col-xxl-4 col-xl-4 col-md-4 col-sm-12">
            <img className="blog__img" src={props.blog.blogImg1} alt="" />
          </div>
          <div className="col col-xxl-8 col-xl-8 col-md-8 col-sm-12">
            <img className="blog__img" src={props.blog.blogImg2} alt="" />
          </div>
        </div>

        <p className="description">
          Labore voluptua diam dolor est stet ea sit amet lorem, invidunt dolore
          dolore dolores nonumy at. Consetetur at et amet.Lorem magna no at amet
          ut takimata dolores ipsum magna. Consetetur ipsum gubergren lorem
          labore ipsum tempor dolor dolores duo..
        </p>
        <div className="post-info">
          <div className="post-info-left">
            <Link to="#" className="time a--sub">
              {props.blog.time}
            </Link>
            <Link to="#comment__blog" className="comment-count a--sub">
              <i className="far fa-comment mx-1"></i>2 Comments
            </Link>
          </div>
          <div className="post-info-right">
            <li className="social__item">
              <a
                href="https://twitter.com/home"
                rel="noreferrer"
                target="_blank"
              >
                <i className=" fab fa-twitter"></i>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.pinterest.com/qodeinteractive/"
                rel="noreferrer"
                target="_blank"
              >
                <i className=" fab fa-pinterest-p"></i>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/nguyenhung9104/"
                rel="noreferrer"
                target="_blank"
              >
                <i className=" fab fa-instagram"></i>
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.facebook.com/profile.php?id=100047468063150"
                rel="noreferrer"
                target="_blank"
              >
                <i className=" fab fa-facebook-f"></i>
              </a>
            </li>
          </div>
        </div>
        <br />

        <div className="list__tags">
          {get_random(tag, 3).map((e, id) => (
            <Link key={id} to="#">
              {e}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};
const postTextData = [
  {
    author: "Jenny Loren",
    content: '"Ut audia iracu. An eaem die iste lique."',
    icon: "fas fa-quote-right",
  },
  {
    author: '"Jenny Loren"',
    content: '"Of eodia iracu. Au oauw qip eist liqua."',
    icon: "fas fa-quote-right",
  },
  {
    author: '"Jenny Loren"',
    icon: "fas fa-link",
  },
];
const PostText = (props) => {
  return (
    <div className="post-text">
      {props.postText.content && (
        <Link to="#" className="quote">
          {props.postText.content}
        </Link>
      )}
      <h5>{props.postText.author}</h5>
      <div className="quotes-icon">
        <i className={props.postText.icon}></i>
      </div>
    </div>
  );
};

// banner
const banData = [
  {
    name: "ban-blog",
    img: BanBlogPage,
    title: "Blog Masonry",
    subtitle: "Amazing Tour",
  },
  {
    name: "ban-product",
    img: productBan,
    title: "Shop",
    subtitle: "Amazing Tour",
  },
  {
    name: "ban-element",
    img: BanElementsTour,
    title: "Tour List",
  },
  {
    name: "ban-element",
    img: BanElementsTour,
    title: "Tour Carousel",
  },
  {
    name: "ban-element",
    img: BanElementsTour,
    title: "Tour Filter",
  },
];
const Baner1 = (props) => {
  return (
    <div className={`banner1 ${props.banData.blog}`}>
      <img src={props.banData.img} alt="ban-blog-img" />
      <div>
        {props.banData.subtitle && (
          <h3 className="subtitle">{props.banData.subtitle}</h3>
        )}
        <h1 className="title">{props.banData.title}</h1>
      </div>
    </div>
  );
};
export { BlogItem, blogData, PostText, postTextData, Baner1, banData };
