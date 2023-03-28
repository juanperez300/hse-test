import React, { useState } from "react";
//context
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [filter, setFilter] = useState("este es el contexto");
  const [lookfor, setLookfor] = React.useState({
    name: "",
  });
  const [outcome, setOutcome] = useState("");
  const [newData, setNewData] = useState({
    name: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  });
  const [searchData, setSearchData] = useState("");
  return (
    <AppContext.Provider
      value={{
        filter,
        setFilter,
        lookfor,
        setLookfor,
        outcome,
        setOutcome,
        newData,
        setNewData,
        searchData,
        setSearchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;