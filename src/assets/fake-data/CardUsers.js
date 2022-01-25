const card_img_01 = require("../img/user/user1.png").default;
const card_img_02 = require("../img/user/user2.png").default;
const card_img_03 = require("../img/user/user3.png").default;
const card_img_04 = require("../img/user/user4.png").default;
const card_img_05 = require("../img/user/user5.png").default;
const card_img_06 = require("../img/user/user6.png").default;
const card_img_07 = require("../img/user/user6.png").default;

const card_data_user = [
  {
    id: 1,
    img: card_img_01,
    name: "Galy Rios",
    rating__info: [
      {
        rating__place: "Corfu",
        rating__score: 80,
        rating: "Blick der unbestimmten längst vor mir. Alten die wenn zug.",
      },
    ],
  },
  {
    id: 2,
    img: card_img_02,
    name: "Johan Loreto",
    rating__info: [
      {
        rating__place: "Bacerona",
        rating__score: 80,
        rating: "Blick der unbestimmten längst vor mir. Alten die wenn zug.",
      },
    ],
  },
  {
    id: 3,
    img: card_img_03,
    name: "Ci e.don",
    rating__info: [
      {
        rating__place: "Kasigon",
        rating__score: 80,
        rating: "Blick der unbestimmten längst vor mir. Alten die wenn zug.",
      },
    ],
  },
  {
    id: 4,
    img: card_img_04,
    name: "Sam blick",
    rating__info: [
      {
        rating__place: "Tapie",
        rating__score: 80,
        rating: "Blick der unbestimmten längst vor mir. Alten die wenn zug.",
      },
    ],
  },
  {
    id: 5,
    img: card_img_05,
    name: "Emma coper",
    rating__info: [
      {
        rating__place: "Marid",
        rating__score: 80,
        rating: "Blick der unbestimmten längst vor mir. Alten die wenn zug.",
      },
    ],
  },
  {
    id: 6,
    img: card_img_06,
    name: "Macost Js",
    rating__info: [
      {
        rating__place: "Tagona",
        rating__score: 80,
        rating: "Blick der unbestimmten längst vor mir. Alten die wenn zug.",
      },
    ],
  },
  {
    id: 7,
    img: card_img_07,
    name: "NaNa Loreto",
    rating__info: [
      {
        rating__place: "Beautifull Holland",
        rating__score: 80,
        rating:
          "Magna dolore vero dolor at ipsum. Invidunt elitr et et aliquyam ut takimata sit kasd. Sed takimata eirmod diam et.",
      },
    ],
  },
];

const getAllCards = () => card_data_user;

const getCards_random = (count) => {
  const max = card_data_user.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return card_data_user.slice(start, start + count);
};
const getCards = (index, count) => {
  if (count > card_data_user.length - count - index) {
    return getCards_random(count);
  } else {
    return card_data_user.slice(index, index + count);
  }
};
const card__data = {
  getAllCards,
  getCards_random,
  getCards,
};

export default card__data;
