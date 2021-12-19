import "./BlogItem.scss";
import { Link } from "react-router-dom";
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

const BlogItem = (props) => {
  return (
    <article className="blog-item">
      <Link to="">
        <img src={props.blog.img} alt={`blog-img-${props.blog.id}`} />
        <h4 className="title">{props.blog.title}</h4>
      </Link>
      <p>{props.blog.content}</p>
      <div className="post-info">
        <Link className="time a--sub" to="">
          {props.blog.time}
        </Link>
        <Link className="comment-count a--sub" to="">
          <i class="far fa-comment"></i>2 Comment
        </Link>
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
        <Link to="" className="quote">
          {props.postText.content}
        </Link>
      )}
      <h5>{props.postText.author}</h5>
      <div className="quotes-icon">
        <i class={props.postText.icon}></i>
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
