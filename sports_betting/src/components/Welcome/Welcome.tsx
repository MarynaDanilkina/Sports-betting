import Team from "components/team/team";
import { useAppDispatch, useAppSelector } from "interfaces/interfaces";
import React from "react";
import { Link } from "react-router-dom";
import { reduserSlice } from "toolkitRedux/toolkitReducer";
import "./welcome.css";

function Welcome() {
  const { data, betting, notification } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { notificationNo } = reduserSlice.actions;

  if (notification) {
    setTimeout(() => {
      //dispatch(notificationNo());
    }, 3000);
  }
  console.log(betting);
  return (
    <main className="main">
      {notification && (
        <>
          <p className="notification">
            Спасибо, ваш матч {betting.team[0].team1} против{" "}
            {betting.team[0].team2}, cтавка на {betting.bid.result}, принята!
          </p>
        </>
      )}
      {data.map((team) => (
        <Link key={team.id} to={`/${team.id}`}>
          <Team team={team} key={team.id} />
        </Link>
      ))}
    </main>
  );
}
export default Welcome;
