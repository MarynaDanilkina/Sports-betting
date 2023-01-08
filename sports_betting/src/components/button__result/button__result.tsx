import { Idata, useAppDispatch } from "interfaces/interfaces";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { reduserSlice } from "toolkitRedux/toolkitReducer";
import "./button__result.css";

function Button__result({ team }: { team: Idata[] }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { betting } = reduserSlice.actions;
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const goBack = () => navigate(-1);
  const onSubmit: (data: object) => void = (data) => {
    reset();
    dispatch(betting({ data, team }));
    goBack();
  };
  return (
    <form
      className="form-component__container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="button__result">
        <label className="label">
          <div className="label__team">
            <input
              className="button__result-title"
              type="radio"
              value={team[0].team1}
              {...register("result")}
            />
            {team[0].team1}
          </div>

          <p className="button__result-coefficient">{team[0].П1}</p>
        </label>
        <label className="label">
          <div className="label__team">
            <input
              {...register("result")}
              className="button__result-title"
              type="radio"
              value="Ничья"
            />
            Ничья
          </div>

          <p className="button__result-coefficient">{team[0].X}</p>
        </label>
        <label className="label">
          <div className="label__team">
            <input
              {...register("result")}
              className="button__result-title"
              type="radio"
              value={team[0].team2}
            />
            {team[0].team2}
          </div>

          <p className="button__result-coefficient">{team[0].П2}</p>
        </label>
      </div>
      <div className="button__container">
        <button className="submit" type="submit" disabled={!isDirty}>
          Сделать ставку
        </button>
      </div>
    </form>
  );
}
export default Button__result;
