import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://www.smartinsights.com/wp-content/uploads/2018/11/Mark-Zuckerberg.jpg"
          alt="Mark Zuckerberg"
        />
        <div>
          <strong>Mark Zuckerberg</strong>
          <span>Marketing Digital</span>
        </div>
      </header>

      <p>O Melhor e mais famoso profissional de marketing digital.</p>
      <br />
      <br />
      <p>
        Estude comigo e saiba ser famoso como eu sou e criar uma base de
        clientes maior do que a do Facebook.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
