import "./forms.scss";

// =======form responed============
const FormResponed = (props) => {
  return (
    <form className="row g-3 needs-validation form" noValidate>
      <h3 className="form__title">{props.title}</h3>
      <p className="form__subtitle">{props.subtitle}</p>
      <div className="user__rating"></div>
      <div className="col-md-12">
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            <i className="far fa-comments"></i>
          </span>
          <textarea
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="Comment"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            <i className="fas fa-user"></i>
          </span>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Name*"
            required
          />
        </div>
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-6">
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            <i className="far fa-envelope"></i>
          </span>
          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            placeholder="Email*"
            required
          />
          <div className="invalid-feedback">Please choose a Email.</div>
        </div>
      </div>

      <div className="col-12">
        <div className="form-check">
          <input type="checkbox" value="" id="invalidCheck" required />
          <label className="form-check-label" htmlFor="invalidCheck">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

// ========form description ========
const FormDescription = (props) => {
  return (
    <div className="form">
      <div className="form__description">
        <h2 className="form__title">Good To Know</h2>
        <h3 className="form__subtitle">
          Good to Know Read the basic info and also some fun facts about
          Australia! Here you will find everything you should know about the
          ‘’Land of Plenty’’!
        </h3>
        <table>
          <tr>
            <td>
              <section>
                <i className="fas fa-map-marker-alt"></i>
                <p>Country</p>
              </section>
            </td>
            <td>{props.title || "Taiwan"}</td>
          </tr>
          <tr>
            <td>
              <section>
                <i className="fab fa-cc-visa"></i>
                <p>Visa Requirements</p>
              </section>
            </td>
            <td>{props.visa || "	Not Needed for EU Citizens."}</td>
          </tr>

          <tr>
            <td>
              <section>
                <i className="far fa-comment-dots"></i>
                <p>Languages spoken</p>
              </section>
            </td>
            <td>{props.languages || "English"}</td>
          </tr>
          <tr>
            <td>
              <section>
                <i className="fas fa-wallet"></i>
                <p>Currency Used</p>
              </section>
            </td>
            <td>{props.currency || "Euro"}</td>
          </tr>
          <tr>
            <td>
              <section>
                <i className="far fa-compass"></i>
                <p>Area (Km2)</p>
              </section>
            </td>
            <td>{props.area || "750.63 km2"}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const FormFollow = () => {
  return (
    <form
      action="
  /"
      className="form"
    >
      <div className="form__follow">
        <h2 className="form__title">Newsleter</h2>
        <p className="form__subtitle">
          Rebum sit takimata ea amet est, est no sea sadipscing magna voluptua
          nonumy et labore,.
        </p>
        <div className=" footer__form-name">
          <i className="fas fa-user"></i>
          <input maxLength="50" type="text" placeholder="Name" name="" id="" />
        </div>
        <div className=" footer__form-email">
          <i className="far fa-envelope"></i>
          <input
            maxLength="50"
            type="email"
            placeholder="Email"
            name=""
            id=""
          />
        </div>
        <button type="submit" className=" footer__form-submit">
          Subscribe
        </button>
      </div>
    </form>
  );
};
export { FormResponed, FormDescription, FormFollow };
