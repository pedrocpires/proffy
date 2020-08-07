// eslint-disable-next-line no-unused-vars
import React, { useState, FormEvent } from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  // eslint-disable-next-line camelcase
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeacher(e: FormEvent) {
    e.preventDefault();
    const res = await api.get("/classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(res.data);
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os Proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeacher}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", tag: "Artes" }, // eslint-disable-line object-curly-newline
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
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
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
          <Input
            type="time"
            name="time"
            label="Horário"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          const { id } = teacher;
          return <TeacherItem teacher={teacher} key={id} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
