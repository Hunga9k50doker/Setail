
import './sidebars.scss';
const sidebar_search = () => {

    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <h3 className="sidebar__item-title">
                    Plan your trip
                </h3>
                <p className="sidebar__item-subTitle">
                It’s time to plan just the perfect vacation!
                </p>
                <ul className="sidebar__item-inputs">
                    <li className="sidebar__item-input">

                        <input type="text" name="name_tour" id="name_tour" />
                    </li>
                </ul>
            </div>
            <div className="sidebar__item">
            <h3 className="sidebar__item-title">
                    Filter by Price
                </h3>
                <input type="range" name="range_price" id="range_price" />
                <p className="sidebar__item-price"></p>
            </div>
        </div>
    );
}

export default sidebar_search;