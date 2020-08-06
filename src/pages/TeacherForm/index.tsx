import React, { useState } from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewScheduleitem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>
          <Select
            name="subject"
            label="Matéria"
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
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleitem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => (
            <div key={scheduleItem.week_day} className="schedule-item">
              <Select
                name="week_day"
                label="Dia da Semana"
                options={[
                  { value: "0", tag: "Domingo" }, // eslint-disable-line object-curly-newline
                  { value: "1", tag: "Segunda-feira" }, // eslint-disable-line object-curly-newline
                  { value: "2", tag: "Terça-feira" }, // eslint-disable-line object-curly-newline
                  { value: "3", tag: "Quarta-feira" }, // eslint-disable-line object-curly-newline
                  { value: "4", tag: "Quinta-feira" }, // eslint-disable-line object-curly-newline
                  { value: "5", tag: "Sexta-feira" }, // eslint-disable-line object-curly-newline
                  { value: "6", tag: "Sábado" }, // eslint-disable-line object-curly-newline, comma-dangle
                ]}
              />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          ))}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante!
            <br />
            Preencha todos os dados.
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
