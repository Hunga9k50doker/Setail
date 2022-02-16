import React from "react";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import Helmet from "../../../components/Helmet/Helmet";
import "../../App.scss";
import "./styles.scss";

const TypographyColumns = () => {
  return (
    <Helmet title="Columns Layout">
      <div className=" grid ">
        <Baner1 banData={{ ...banData[2], title: "Columns" }} />

        <div className="container">
          <h3 className="heading__title mt-5 pt-4 pb-2">I Column Layout</h3>
          <div className="row  ">
            <div className="col col-xxl-12 col-xl-12 col-md-12 col-sm-12">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>
          <h3 className="heading__title pt-4 pb-2">II Columns Layout</h3>
          <div className="row ">
            <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
            <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>{" "}
          <h3 className="heading__title pt-4 pb-2">III Columns Layout</h3>
          <div className="row ">
            <div className="col col-xxl-4 col-xl-4 col-md-4 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
            <div className="col col-xxl-4 col-xl-4 col-md-4 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>{" "}
            <div className="col col-xxl-4 col-xl-4 col-md-4 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>{" "}
          <h3 className="heading__title pt-4 pb-2">IV Columns Layout</h3>
          <div className="row ">
            <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
            <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
            <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
            <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>{" "}
          <h3 className="heading__title pt-4 pb-2">
            I Third / II Thirds Layout
          </h3>
          <div className="row ">
            <div className="col col-xxl-4 col-xl-4 col-md-4 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
            <div className="col col-xxl-8 col-xl-8 col-md-8 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>{" "}
          <h3 className="heading__title pt-4 pb-2">
            I Fourth / III Fourths Layout
          </h3>
          <div className="row  mb-5">
            <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
            <div className="col col-xxl-9 col-xl-9 col-md-9 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
          </div>
          <h3 className="heading__title pt-4 pb-2">
            III Fourths / I Fourth Layout
          </h3>
          <div className="row  mb-5">
            <div className="col col-xxl-9 col-xl-9 col-md-9 col-sm-6">
              <p>
                Accusam tempor elitr at sed magna. Ut et amet diam erat sanctus
                stet. Justo accusam et stet lorem. Et clita.Stet voluptua rebum
                kasd est dolor duo dolor sit, dolores sea et accusam tempor
                dolore, et dolor stet sanctus dolor.
              </p>
            </div>
            <div className="col col-xxl-3 col-xl-3 col-md-3 col-sm-6">
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

export default TypographyColumns;
