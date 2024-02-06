import s from 'components/Header/header.module.scss';
import { useState } from 'react';
import { Link, useResolvedPath } from "react-router-dom";


function Header() {


  let [changeMenu, setChangeMenu] = useState("hide")

  const openMenu = (e) => {

    if(changeMenu === 'show'){
      setChangeMenu('hide')
    }else{
      setChangeMenu('show')
    }
  }


  return (
    <header className={s.header}>
      <h1 className={s.header__title}>Front End Developer Portfólio </h1>
      <span className={s.menu} onClick={openMenu}>Menu</span>

      <div data-tipo={changeMenu}>
        <nav className={s.header__navigation}>
          <ul>
            <li>
              <Link to={'/'}>Projetos</Link>
            </li>
            <li>
              <Link to={'/sobre-mim'}>Sobre mim</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;