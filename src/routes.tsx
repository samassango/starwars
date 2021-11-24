import React from "react";
import {
  BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
  import{Main, Person, Error} from './presentations';

  function AppNavigation(){
      return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="view-details/:name" element={<Person/>}></Route>
            <Route element={<Error/>}></Route>
          </Routes>
      </BrowserRouter>
      );
  }
  export default AppNavigation;