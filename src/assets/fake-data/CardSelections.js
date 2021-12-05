const Spain = require("../img/featureImg/spain.jpg").default;
const Tarragona = require("../img/featureImg/tarragonaTravel.jpg").default;
const Marid = require("../img/featureImg/marid.jpg").default;
const Bacelona = require("../img/featureImg/bacelona.jpg").default;
const Kosigan = require("../img/featureImg/kosigan.jpg").default;
const Taipe = require("../img/featureImg/travelTaipe.jpg").default;
const Tainan = require("../img/featureImg/Tainan.jpg").default;
const Taiwan = require("../img/featureImg/taiwan.jpg").default;
const Bali = require("../img/featureImg/bali.jpg").default;
const Ubud = require("../img/featureImg/unbu.jpg").default;
const Siminyak = require("../img/featureImg/siminyak.jpg").default;
const Denpasar = require("../img/featureImg/Denpasar.jpg").default;
const WineTasting = require("../img/featureImg/wine.jpg").default
const camping = require("../img/featureImg/camping.jpg").default;
const caving = require("../img/featureImg/caving.jpg").default;
const sydneyOpera = require("../img/featureImg/sydneyOpera.jpg").default;
const kosigan = require("../img/featureImg/kosigan.jpg").default;
const Holand = require("../img/featureImg/Holand.jpg").default;
const templeTour = require("../img/featureImg/templeTour.jpg").default;





const CardSelectionArr = [
  {
    title: "Spain",
    img: Spain,
    subTitle: "",
    cost: "1705",
    rating: "5.0",
  },
  {
    title: "Tarragona",
    img: Tarragona,
    subTitle: "",
    cost: "1740",
    rating: "5.0",
  },
  {
    title: "Marid",
    img: Marid,
    subTitle: "",
    cost: "1100",
    rating: "7.0",
  },
  {
    title: "Bacelona",
    img: Bacelona,
    subTitle: "",
    cost: "1705",
    rating: "5.0",
  },
  {
    title: "Kosigan",
    img: Kosigan,
    subTitle: "",
    cost: "963",
    rating: "5.3",
  },
  {
    title: "Taipe",
    img: Taipe,
    subTitle: "",
    cost: "2130",
    rating: "5.0",
  },
  {
    title: "Tainan",
    img: Tainan,
    subTitle: "",
    cost: "999",
    rating: "7.3",
  },
  {
    title: "Taiwan",
    img: Taiwan,
    subTitle: "",
    cost: "1705",
    rating: "5.0",
  },
  {
    title: "Bali",
    img: Bali,
    subTitle: "",
    cost: "1705",
    rating: "5.0",
  },
  {
    title: "Ubud",
    img: Ubud,
    subTitle: "",
    cost: "888",
    rating: "6.0",
  },
  {
    title: "Siminyak",
    img: Siminyak,
    subTitle: "",
    cost: "966",
    rating: "9.0",
  },
  {
    title: "Denpasar",
    img: Denpasar,
    subTitle: "",
    cost: "999",
    rating: "6.7",
  },
  {
    title: "Wine Tasting",
    img: WineTasting,
    subTitle: "",
    cost: "920",
    rating: "5.0",
  },

  {
    title: "Camping",
    img: camping,
    subTitle: "",
    cost: "1550",
    rating: "5.0",
  },
  {
    title: "Sydney Opera",
    img: sydneyOpera,
    subTitle: "",
    cost: "550",
    rating: "5.0",
  },
  {
    title: "Caving",
    img: caving,
    subTitle: "",
    cost: "1550",
    rating: "5.0",
  },
  {
    title: "Beautiful Holand",
    img:  Holand,
    subTitle: "",
    cost: "1330",
    rating: "5.0",
  },
  {
    title: "TempleTour",
    img: templeTour,
    subTitle: "",
    cost: "1550",
    rating: "5.0",
  },
];

const getCards_random = (count) => {
  const max = CardSelectionArr.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return CardSelectionArr.slice(start, start + count);
};

const getCards = (index,count) =>{
   if( count > CardSelectionArr.length - count - index){
       return getCards_random(count) ;
   }else{
    return CardSelectionArr.slice(index, index + count);
   }
}
const card_selection_data = {
  getCards_random,
  getCards
};

export default card_selection_data;
