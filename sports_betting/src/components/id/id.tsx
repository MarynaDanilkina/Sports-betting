import Loading from "components/Loading/loading";
import { Idata, useAppDispatch, useAppSelector } from "interfaces/interfaces";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { reduserSlice } from "toolkitRedux/toolkitReducer";
import "./id.css";

function ID() {
  const dispatch = useAppDispatch();
  const { addTeamId } = reduserSlice.actions;
  const { id } = useParams();
  const navigate = useNavigate();
  const { teamId } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(addTeamId(id));
  }, [dispatch, id]);
  if (Object.keys(teamId).length == 0) {
    return <Loading />;
  }
  return (
    <div className="teamID__container">
      <div className="teamID">
        <div className="team__container">
          <p>{teamId[0].team1}</p>
          <img src={teamId[0].img1} alt={teamId[0].team1} />
        </div>
        <div className="time__container">
          <p className="date__id">{teamId[0].date}</p>
          <p className="time__id">{teamId[0].time}</p>
        </div>
        <div className="team__container">
          <img src={teamId[0].img2} alt={teamId[0].team2} />
          <p>{teamId[0].team2}</p>
        </div>
      </div>
    </div>
  );
}
export default ID;
