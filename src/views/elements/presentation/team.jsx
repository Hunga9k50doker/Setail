import React from "react";
import "../../App.scss";
import "./team.scss";
import { Baner1, banData } from "../../../components/blogItem/BlogItem";
import {
  TeamHolderItem,
  teamData,
  TeamHolderBelow,
} from "../../../components/cards/cardTeam/cardTeam";

const ElementTeam = () => {
  return (
    <div className="our-team">
      <Baner1 banData={{ ...banData[2], title: "Team" }} />
      <section className="team-holder row">
        {teamData
          .filter((e) => !!e.content)
          .map((item, index) => (
            <div className="item">
              <TeamHolderItem data={item} key={index} />
            </div>
          ))}
      </section>
      <section className="team-holder__bellow row grey">
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
