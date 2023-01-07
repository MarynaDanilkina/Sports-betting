import React from "react";
import "./check.css";

function Check({ title, coefficient }: { title: string; coefficient: number }) {
  return (
    <div className="team__check">
      <p className="check__title">{title}</p>
      <p className="check__coefficient">{coefficient}</p>
    </div>
  );
}
export default Check;
