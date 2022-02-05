import "./tourFilter.scss";

const TourFilter = ({ children }) => {
  return (
    <div className="tour">
      <form className="tour__filter">
        <ul className="tour__filter-list">
          {children}
          <li className="tour__filter-item">
            <i className="far fa-compass"></i>
            <input type="text" placeholder="Where to?" />
          </li>
          <li className="tour__filter-item">
            <i className="far fa-calendar-alt"></i>
            <select id="tour__filter-item-months">
              <option value="0">Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </li>
          <li className="tour__filter-item">
            <i className="fas fa-thumbtack"></i>
            <select id="tour__filter-item-travel-types">
              <option value="0">Travel Type</option>
              <option value="1">Europe</option>
              <option value="2">Latest</option>
              <option value="3">NY</option>
              <option value="4">PoPular</option>
              <option value="5">Skiing</option>
              <option value="6">Trendy</option>
              <option value="7">Wines</option>
            </select>
          </li>
          <li className="tour__filter-item">
            <input type="submit" value="Find now" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default TourFilter;
