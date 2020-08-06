import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os Proffys disponíveis">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Segunda-feira", tag: "Segunda-feira" }, // eslint-disable-line object-curly-newline
              { value: "Biologia", tag: "Biologia" }, // eslint-disable-line object-curly-newline
              { value: "Ciências", tag: "Ciências" }, // eslint-disable-line object-curly-newline
              { value: "Educação Física", tag: "Educação Física" }, // eslint-disable-line object-curly-newline
              { value: "Física", tag: "Física" }, // eslint-disable-line object-curly-newline
              { value: "Geografia", tag: "Geografia" }, // eslint-disable-line object-curly-newline
              { value: "História", tag: "História" }, // eslint-disable-line object-curly-newline
              { value: "Matemática", tag: "Matemática" }, // eslint-disable-line object-curly-newline
              { value: "Português", tag: "Português" }, // eslint-disable-line object-curly-newline
              { value: "Química", tag: "Química" }, // eslint-disable-line object-curly-newline, comma-dangle
            ]}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            options={[
              { value: "0", tag: "Doming" }, // eslint-disable-line object-curly-newline
              { value: "1", tag: "Segunda-feira" }, // eslint-disable-line object-curly-newline
              { value: "2", tag: "Terça-feira" }, // eslint-disable-line object-curly-newline
              { value: "3", tag: "Quarta-feira" }, // eslint-disable-line object-curly-newline
              { value: "4", tag: "Quinta-feira" }, // eslint-disable-line object-curly-newline
              { value: "5", tag: "Sexta-feira" }, // eslint-disable-line object-curly-newline
              { value: "6", tag: "Sábado" }, // eslint-disable-line object-curly-newline, comma-dangle
            ]}
          />
          <Input type="time" name="time" label="Horário" />
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
