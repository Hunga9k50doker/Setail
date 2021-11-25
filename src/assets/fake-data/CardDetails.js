const card_01_img_01 = require("../img/featureImg/Corfu.jpg").default;
const card_01_img_02 = require("../img/featureImg/vatican.jpg").default;
const card_01_img_03 = require("../img/featureImg/rome.jpg").default;
const card_01_img_04 = require("../img/featureImg/manila.jpg").default;
const card_01_img_05 = require("../img/featureImg/destination19.jpg").default;
const card_02_img_02 = require("../img/featureImg/winter2.jpg").default;
const card_02_img_03 = require("../img/featureImg/winter3.jpg").default;
const card_02_img_04 = require("../img/featureImg/winter4.jpg").default;
const card_02_img_05 = require("../img/featureImg/winter5.jpg").default;
const card_02_img_06 = require("../img/featureImg/winter6.jpg").default;
const card_02_img_07 = require("../img/featureImg/winter7.jpg").default;

const CardDetailArr = [
  {
    img: card_01_img_01,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Corfu",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "996",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_01_img_02,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Vatican City",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "860",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_01_img_03,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Rome",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "2300",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_01_img_04,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Milan",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "1230",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_01_img_05,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Seville",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "1500",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },

  {
    img: card_02_img_03,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Kis Ski School",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "1600",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_02_img_02,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Magic Of Italy",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "1000",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_02_img_04,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Winter Action",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "960",
    rating: "6.0",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_02_img_05,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Skiing In Alps",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "450",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_02_img_06,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Snow Surfing",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "720",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
  {
    img: card_02_img_07,
    calendar: "1",
    custom: "13+",
    location: "Europe",
    title: "Active Winter",
    subTitle: "Meinem seh blick noch lebt die dem nicht tränen was..",
    cost: "3600",
    rating: "7.3",
    icon: "fas fa-star-half-alt",
  },
];

const getAllCards = () => CardDetailArr;

const getCards_random = (count) => {
  const max = CardDetailArr.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return CardDetailArr.splice(start, start + count);
};
const getCards = (index,count) =>{
  if( count > CardDetailArr.length - count - index){
      return getCards_random(count) ;
  }else{
   return CardDetailArr.slice(index, index + count);
  }
}
const cardData = { getAllCards, getCards ,getCards_random};

export default cardData;
