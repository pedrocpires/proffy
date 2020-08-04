import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/60664358?s=460&u=bdc5e2e8561f3aef275fed0e3f4c7951fb51c748&v=4"
          alt="Pedro Pires"
        />
        <div>
          <strong>Pedro Pires</strong>
          <span>React</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Quaerat nam dolorem tempora molestias cumque obcaecati cupiditate
        corporis commodi quod quae, soluta, cum illo et, ex adipisci eligendi
        fuga reiciendis inventore!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
