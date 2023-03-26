import React, { useState } from "react";
//context
import AppContext from "./AppContext";



const AppProvider = ({ children }) => {
  const [filter, setFilter] = useState("este es el contexto")
  

  return (
    <AppContext.Provider
      value={{
        filter, setFilter
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;