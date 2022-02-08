const blog_img_01 = require("../img/blogImg&Banner/blog1.jpg").default;
const blog_img_02 =
  require("../img/blogImg&Banner/blog-img-2-150x150.jpg").default;
const blog_img_19 =
  require("../img/blogImg&Banner/blog-img-19-150x150.jpg").default;
const blog_img_23 =
  require("../img/blogImg&Banner/blog-img-23-150x150.jpg").default;

const card_data_blog = [
  {
    id: 1,
    img: blog_img_02,
    title: "Visit ThaiLan, Bali and China",
    time: "September 7, 2016",
  },
  {
    id: 2,
    img: blog_img_19,
    title: "The Sound Of Our Jungle",

    time: "September 7, 2016",
  },
  {
    id: 3,
    img: blog_img_23,
    title: "New Year, New Resolutions!",
    time: "September 7, 2016",
  },
];

const getAllCards = () => card_data_blog;

const getCards_random = (count) => {
  const max = card_data_blog.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return card_data_blog.slice(start, start + count);
};
const getCards = (index, count) => {
  if (count > card_data_blog.length - count - index) {
    return getCards_random(count);
  } else {
    return card_data_blog.slice(index, index + count);
  }
};
const data__blog = {
  getAllCards,
  getCards_random,
  getCards,
};

export default data__blog;
