/* eslint-disable @next/next/no-img-element */
import "./style.menu.css";
export const Menu = () => {
  return (
    <header>
      <span></span>
      <div>
        <a>Projetos</a>
        <a>Artigos</a>
        <a>Documentações</a>
        <a>E-Books</a>
        <a>Contatos</a>
      </div>
      <div>
        <label htmlFor="search">Buscar</label>
        <input type="search" name="search" id="search" />
      </div>
      <div className="menu" ></div>
    </header>
  );
};
