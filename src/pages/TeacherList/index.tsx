import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os Proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Matéria
              <input type="text" id="subject" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">
              Matéria
              <input type="text" id="week_day" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="time">
              Matéria
              <input type="text" id="time" />
            </label>
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
