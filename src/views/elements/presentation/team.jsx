import React from "react";

import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import {
  TeamHolderItem,
  TeamHolderBelow,
} from "../../../components/cards/cardTeam/cardTeam";
import { teamData } from "../../../assets/fake-data/CardTeams";
import Helmet from "../../../components/Helmet/Helmet";
import "../../App.scss";
import "./styles.scss";
const ElementTeam = () => {
  return (
    <Helmet title="Team List">
      <div className="our-team component">
        <Baner1 banData={{ ...banData[2], title: "Team" }} />
        <section className="team-holder row row__team">
          {teamData
            .filter((e) => !!e.content)
            .map((item, index) => (
              <div key={index} className="item">
                <TeamHolderItem data={item} />
              </div>
            ))}
        </section>
        <section className="team-holder__bellow row row__team grey">
          {teamData
            .filter((e) => !!e.position)
            .map((item, index) => (
              <div key={index} className="item">
                <TeamHolderBelow data={item} />
              </div>
            ))}
        </section>
      </div>
    </Helmet>
  );
};

export default ElementTeam;
