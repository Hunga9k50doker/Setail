import {Link} from 'react-router-dom';
import "./sidebars.scss";
const SidebarSearch = () => {
  return (
      <>
    <div className="sidebar">
      <div className="sidebar__item">
        <h3 className="sidebar__item-title">Plan your trip</h3>
        <p className="sidebar__item-subTitle">
          It’s time to plan just the perfect vacation!
        </p>
        <ul className="sidebar__item-inputs">
          <li className="sidebar__item-input">
            <i class="fab fa-searchengin"></i>
            <input
              type="text"
              name="name_tour"
              id="name_tour"
              placeholder="Search tour"
            />
          </li>
          <li className="sidebar__item-input">
            <i class="far fa-compass"></i>
            <input
              type="text"
              name="where_tour"
              id="where_tour"
              placeholder="Where tour"
            />
          </li>
          <li className="sidebar__item-input">
            <i class="fas fa-calendar-week"></i>
            <input
              type="text"
              name="time_tour"
              id="time_tour"
              placeholder="Month"
            />
          </li>
        </ul>
      </div>
      <div className="sidebar__item">
        <h3 className="sidebar__item-title">Filter by Price</h3>
        <input type="range" name="range_price" id="range_price" />
        <p className="sidebar__item-price">Price: $12 - $3600</p>
        <ul className="list__input">
            <li className="list__input-item">
            <input type="radio" name="type__tour" id="popular" />
         
            <label htmlFor="popular">Popular</label>

            </li>
            <li className="list__input-item">

            <input type="radio" name="type__tour" id="Trendy" />
          <label htmlFor="Trendy">Trendy</label>
            </li>
            <li className="list__input-item">
          <input type="radio" name="type__tour" id="ny" />
          <label htmlFor="ny">NY</label>
          

            </li>
            <li className="list__input-item">

            <input type="radio" name="type__tour" id="lastest" />
          <label htmlFor="lastest">Lastest</label>
          
            </li>
            <li className="list__input-item">
            <input type="radio" name="type__tour" id="Wines" />
          <label htmlFor="Wines">Wines</label>
          

            </li>
            <li className="list__input-item">
            <input type="radio" name="type__tour" id="Skiing" />
          <label htmlFor="Skiing">Skiing</label>
          

            </li>
            <li className="list__input-item">
            <input type="radio" name="type__tour" id="Europe" />
          <label htmlFor="Europe">Europe</label>
         

            </li>
        </ul>
          
        </div>
      <div className="siderbar__item">
          <button>Search</button>
      </div>

    </div>
    <Link to='#'   style={{width: '100%'}} className="img">

        <img
        style={{width: '100%', marginTop:'40px'}}
        src={require('../../assets/img/other/sidebar-img-1.jpg').default} alt="not found" />
    </Link>
      </>
  );
};

export default SidebarSearch;
