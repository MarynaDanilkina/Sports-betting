import Team from "components/team/team";
import { useAppDispatch, useAppSelector } from "interfaces/interfaces";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const { data } = useAppSelector((state) => state);
  return (
    <main className="main">
      {data.map((team) => (
        <Link key={team.id} to={`/${team.id}`}>
          <Team team={team} key={team.id} />
        </Link>
      ))}
    </main>
  );
}
export default Welcome;
