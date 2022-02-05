import React from "react";
import "../../App.scss";
import "./team.scss";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import {
  TeamHolderItem,
  TeamHolderBelow,
} from "../../../components/cards/cardTeam/cardTeam";
import { teamData } from "../../../assets/fake-data/CardTeams";

const ElementTeam = () => {
  return (
    <div className="our-team">
      <Baner1 banData={{ ...banData[2], title: "Team" }} />
      <section className="team-holder row row__team">
        {teamData
          .filter((e) => !!e.content)
          .map((item, index) => (
            <div className="item">
              <TeamHolderItem data={item} key={index} />
            </div>
          ))}
      </section>
      <section className="team-holder__bellow row row__team grey">
        {teamData
          .filter((e) => !!e.position)
          .map((item, index) => (
            <div className="item">
              <TeamHolderBelow data={item} key={index} />
            </div>
          ))}
      </section>
    </div>
  );
};

export default ElementTeam;
