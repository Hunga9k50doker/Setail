import HomeExotic from "../views/home/exoticDestinations/exotic";
import HomeTravel from "../views/home/travelAgency/travel";
import HomeWinter from "../views/home/winterHoliday/winter";

import AboutUs from "../views/pages/aboutUs/about";
import OurTeam from "../views/pages/ourTeam/ourTeam";
import WhatWeOffer from "../views/pages/whatWeOffer/offer";

import Item from "../views/destinations/destinationsItem/item";
import List from "../views/destinations/destinationsList/list";
import Slider from "../views/destinations/destinationsSlider/slider";

import Gallery from "../views/tours/galleryList/gallery";
import Standard from "../views/tours/standardList/standard";
import Split from "../views/tours/splitList/split";

import Masonry from "../views/blog/masonry/masonry";
import BlogGallery from "../views/blog/postType/gallery";
import BlogLink from "../views/blog/postType/link";
import TypeStandard from "../views/blog/postType/standard";
import BlogStandard from "../views/blog/standard/BlogStandard";
// import { BlogItem } from "../views./components/blogItem/BlogItem";

import ShopList from "../views/shop/productList/list";
import ShopSingle from "../views/shop/productSingle/single";
import ShopLayout from "../views/shop/shopLayout/shopLayout";

import ElementAccordions from "../views/elements/classic/accordions";
import Buttons from "../views/elements/classic/buttons";
import Tabs from "../views/elements/classic/tabs";
import Carousel from "../views/elements/featured/carousel";
import Filter from "../views/elements/featured/filter";
import TourList from "../views/elements/featured/tourList";
import ElementShop from "../views/elements/presentation/shop";
import ElementBlog from "../views/elements/presentation/blog";
import ElementsTeam from "../views/elements/presentation/team";
import TypographyHeadings from "../views/elements/typography/headings";
import TypographyColumns from "../views/elements/typography/columns";
import TypographySectionTitle from "../views/elements/typography/sectionTitle";

import ItemDetail from "../components/tourItem/item";

// =====================admin================================
import Home from "../views/admin/Home";
const PublishRoute = [
  { path: "/", component: HomeTravel },
  { path: "/detail/:slug", component: TypeStandard },
  { path: "/home/winter-holidays", component: HomeWinter },
  { path: "/home/exotic-destinations", component: HomeExotic },

  { path: "/pages/about-us", component: AboutUs },
  { path: "/pages/our-team", component: OurTeam },
  { path: "/pages/what-we-offer", component: WhatWeOffer },

  { path: "/destinations/list", component: List },
  { path: "/destinations/slider", component: Slider },
  { path: "/destinations/:slug", component: Item },

  { path: "/tours/gallery-list", component: Gallery },
  { path: "/tours/standard-list", component: Standard },
  { path: "/tours/split-list", component: Split },
  { path: "/tour-item/:slug", component: ItemDetail },

  { path: "/blog/masonry", component: Masonry },
  { path: "/blog/gallery", component: BlogGallery },
  { path: "/blog/NavLink", component: BlogLink },
  { path: "/blog/standard", component: TypeStandard },
  { path: "/blog/right-sidebar", component: BlogStandard },
  { path: "/blog/left-sidebar", component: BlogStandard },
  { path: "/blog/without-sidebar", component: BlogStandard },
  { path: "/blog/category/:slug", component: BlogStandard },

  { path: "/shop/product-list", component: ShopList },
  { path: "/shop/product-single", component: ShopSingle },
  { path: "/shop/three-columns", component: ShopLayout },
  { path: "/shop/four-columns", component: ShopLayout },
  { path: "/shop/full-width", component: ShopLayout },

  { path: "/elements/tour-carousel", component: Carousel },
  { path: "/elements/tour-list", component: TourList },
  { path: "/elements/tour-filter", component: Filter },
  { path: "/elements/team", component: ElementsTeam },
  { path: "/elements/blog-list", component: ElementBlog },
  { path: "/elements/shop-list", component: ElementShop },
  { path: "/elements/accordions", component: ElementAccordions },
  { path: "/elements/tabs", component: Tabs },
  { path: "/elements/buttons", component: Buttons },
  { path: "/elements/columns", component: TypographyColumns },
  { path: "/elements/headings", component: TypographyHeadings },
  { path: "/elements/section-title", component: TypographySectionTitle },
];

const PrivateRoute = [{ path: "/admin", component: Home }];

export { PublishRoute, PrivateRoute };
