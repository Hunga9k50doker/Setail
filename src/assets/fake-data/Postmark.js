
const card_img_01 = require("../img/stamps/h1-postmark-1.jpg").default;
const card_img_02 = require("../img/stamps/h1-postmark-2.jpg").default;
const card_img_03 = require("../img/stamps/h1-postmark-3.jpg").default;
const card_img_04 = require("../img/stamps/h1-postmark-4.jpg").default;
const card_img_05 = require("../img/stamps/h1-postmark-5.jpg").default;
const card_img_06 = require("../img/stamps/h1-postmark-6.jpg").default;
const card_img_07 = require("../img/stamps/h1-postmark-7.jpg").default;
const card_img_08 = require("../img/stamps/h1-postmark-8.jpg").default;


const card_data_stamps = [
  {
    id: 1,
    img: card_img_01,
    title: "Greece",
    subTitle:
      "At diam no dolore stet dolor labore consetetur et, duo dolor lorem rebum sea sanctus.",
  },
  {
    id: 2,
    img: card_img_02,
    title: "France",
    subTitle:
      "Eos dolores at duo et dolore sed no. Dolor takimata..",
  },
  {
    id: 3,
    img: card_img_03,
    title: "Italy",
    subTitle:
      "Diam sed sit takimata consetetur stet. Elitr amet et gubergren clita ipsum.",
  },
  {
    id: 4,
    img: card_img_04,
    title: "USA",
    subTitle:
      "Duo magna at accusam gubergren sed voluptua tempor takimata ea lorem, elitr.",
  },
  {
    id: 5,
    img: card_img_05,
    title: "Japan",
    subTitle:
      "Consetetur eirmod dolor accusam clita dolores vero sanctus labore justo. Aliquyam stet et et sit vero, ea ut dolore elitr. ",
  },
  {
    id: 6,
    img: card_img_06,
    title: "Indian",
    subTitle:
      "Amet sed eirmod sit kasd dolor et et ut. Eirmod takimata no sit dolores voluptua dolores. Aliquyam ipsum diam invidunt.",
  },
  {
    id: 7,
    img: card_img_07,
    title: "England",
    subTitle:
      "Et no est rebum voluptua accusam sit est amet. Erat clita consetetur sanctus eos, no justo dolores et kasd clita,.",
  },
  {
    id: 8,
    img: card_img_08,
    title: "China",
    subTitle:
      "Invidunt takimata sed no sit est kasd sed, et magna lorem diam takimata amet et amet sed. Diam sed sed.",
  },
];

const getAllCards = () => card_data_stamps;

const getCards_random = (count) => {
  const max = card_data_stamps.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return card_data_stamps.slice(start, start + count);
};
const getCards = (index, count) => {
  if (count > card_data_stamps.length - count - index) {
    return getCards_random(count);
  } else {
    return card_data_stamps.slice(index, index + count);
  }
};
const card__data__postmark = {
  getAllCards,
  getCards_random,
  getCards,
};

export default card__data__postmark;
