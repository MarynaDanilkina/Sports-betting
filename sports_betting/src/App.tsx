import Header from "components/header/header";
import ID from "components/id/id";
import Welcome from "components/Welcome/Welcome";
import { useAppDispatch } from "interfaces/interfaces";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchData } from "toolkitRedux/toolkitReducer";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:id" element={<ID />} />
      </Routes>
    </>
  );
}

export default App;
