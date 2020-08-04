import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Lading from "./Landing";
import TeacherList from "./TeacherList";
import TeacherForm from "./TeacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Lading} exact />
      <Route path="/study" component={TeacherList} exact />
      <Route path="/give-classes" component={TeacherForm} exact />
    </BrowserRouter>
  );
}

export default Routes;
