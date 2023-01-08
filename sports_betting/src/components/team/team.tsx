import Check from "components/check/Check";
import { Idata, TeamProps } from "interfaces/interfaces";
import React from "react";
import "./team.css";

function Team({ team }: TeamProps) {
  return (
    <div className="team__container">
      <div className="team__title-container">
        <div className="team__time-container">
          <p className="team__date">{team.date}</p>
          <p className="team__time">{team.time}</p>
        </div>
        <div className="team__name">
          <div className="team__title">
            <img src={team.img1} alt={team.team1} />
            <p>{team.team1}</p>
          </div>
          <div className="team__title">
            <img src={team.img2} alt={team.team2} />
            <p>{team.team2}</p>
          </div>
        </div>
      </div>
      <div className="team__check__container">
        <Check title={team.team1} coefficient={team.П1} />
        <Check title={"Ничья"} coefficient={team.X} />
        <Check title={team.team2} coefficient={team.П2} />
      </div>
    </div>
  );
}
export default Team;
