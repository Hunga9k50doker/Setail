import { Link } from "react-router-dom";
// ip data
import { img_side_01 } from "../../assets/img";
import data__blog from "../../assets/fake-data/CardBlogs";
// ip components
import { SearchBar, Categories } from "../Product/rightBar/rightBar";
import { FormFollow } from "../forms/forms";
import { to_slug } from "../../utils/utils";
import "./sidebars.scss";
const Sidebar = () => {
  const arr = ["Adventure", "Food", "Travel", "New Year", "Summer"];
  return (
    <div className="side__bar">
      <SearchBar />
      <div className="sidebar__item">
        <h2 className="sidebar__item__title">About me</h2>
        <img src={img_side_01} alt="Not found" className="sidebar__img" />
        <p className="sidebar__item__description">
          Et clita diam at sea no amet sit amet sit et. Rebum vero ipsum est
          kasd lorem, justo elitr invidunt.
        </p>
      </div>
      <Categories>
        {arr.map((e, index) => (
          <li key={index + 1}>
            <Link to={`/blog/category/` + to_slug(e)}>
              {e ? e : "Comming soon!!!"}
            </Link>
          </li>
        ))}
      </Categories>
      <FormFollow />
      <div className="sidebar__item">
        <h2 className="sidebar__item__title">Lastest Posts</h2>
        <ul className="sidebar__list">
          {data__blog.getCards_random(3).map((e, id) => (
            <li key={id + 1} className="sidebar__list__item">
              <img src={e.img} alt="Not found" />
              <Link
                to={
                  id === 2
                    ? "/new-year-new-resolutions"
                    : `${id === 1 ? "/hiking" : "/beautiful-china"}`
                }
                className="sidebar__list__item__content"
              >
                <h3 className="sidebar__list__item__content__title">
                  {e.title}
                </h3>
                <p className="sidebar__list__item__content__time">{e.time}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__item">
        <h2 className="sidebar__item__title">Tags</h2>
        <div className="sidebar__item__tags">
          <Link to="/">camera</Link>
          <Link to="/">city</Link> <Link to="/">fun</Link>{" "}
          <Link to="/">summer</Link> <Link to="/">travel</Link>{" "}
          <Link to="/">winter</Link>
        </div>
      </div>
      <div className="sidebar__item">
        <h2 className="sidebar__item__title">Follow me</h2>
        <ul className="sidebar__item__socials list__social">
          <li className="item__social">
            <a href="https://twitter.com/home" rel="noreferrer" target="_blank">
              <i className=" fab fa-twitter"></i>
            </a>
          </li>
          <li className="item__social">
            <a
              href="https://www.pinterest.com/qodeinteractive/"
              rel="noreferrer"
              target="_blank"
            >
              <i className=" fab fa-pinterest-p"></i>
            </a>
          </li>
          <li className="item__social">
            <a
              href="https://www.instagram.com/nguyenhung9104/"
              rel="noreferrer"
              target="_blank"
            >
              <i className=" fab fa-instagram"></i>
            </a>
          </li>
          <li className="item__social">
            <a
              href="https://www.facebook.com/profile.php?id=100047468063150"
              rel="noreferrer"
              target="_blank"
            >
              <i className=" fab fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
