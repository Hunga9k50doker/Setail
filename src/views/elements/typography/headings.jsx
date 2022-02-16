import React from "react";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import Helmet from "../../../components/Helmet/Helmet";
import "../../App.scss";
import "./styles.scss";

const TypographyHeadings = () => {
  return (
    <Helmet title="Headings">
      <div className="tour-list grip ">
        <Baner1 banData={{ ...banData[2], title: "Heading" }} />

        <div className="container">
          <div className="row py-4 mt-5">
            <div className="col">
              <h1 className="heading__title">Heading 1</h1>
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col">
              <h2 className="heading__title">Heading 2</h2>
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>{" "}
          <div className="row py-4">
            <div className="col">
              <h3 className="heading__title">Heading 3</h3>
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>{" "}
          <div className="row py-4">
            <div className="col">
              <h4 className="heading__title">Heading 4</h4>
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>{" "}
          <div className="row py-4">
            <div className="col">
              <h5 className="heading__title">Heading 5</h5>
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>{" "}
          <div className="row py-4 mb-5">
            <div className="col">
              <h6 className="heading__title">Heading 6</h6>
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default TypographyHeadings;
