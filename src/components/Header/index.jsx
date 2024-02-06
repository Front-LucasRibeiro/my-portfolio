import { useState, useEffect } from 'react';
import { Link, useResolvedPath } from "react-router-dom";

import s from 'components/Header/header.module.scss';
import './variables.css';


function Header() {
  const urlPath = useResolvedPath().pathname;
  const [changeMenu, setChangeMenu] = useState("hide")
  const [path, setPath] = useState([{ "projetos": "ativo" }]);

  const openMenu = (e) => {

    if(changeMenu === 'show'){
      setChangeMenu('hide')
    }else{
      setChangeMenu('show')
    }
  }

  const setRouteActive = (e) => {
    setPath([])

    if (e.target.name === '/projetos') setPath([{ "projetos": "ativo" }])
    if (e.target.name === '/sobre-mim') setPath([{ "sobreMim": "ativo" }])
  }

  useEffect( () => {
    if (urlPath === '/') setPath([{ "projetos": "ativo" }])
    if (urlPath === '/sobre-mim') setPath([{ "sobreMim": "ativo" }])
  }, [])

  return (
    <header className={s.header}>
      <h1 className={s.header__title}><Link to={'/'} name="/projetos" onClick={setRouteActive}>Front End Developer Portfólio</Link></h1>
      <span className={s.menu} onClick={openMenu}>Menu</span>

      <div data-tipo={changeMenu}>
        <nav className={s.header__navigation}>
          <ul>
            <li className={path[0]?.projetos}>
              <Link to={'/'} name="/projetos" onClick={setRouteActive} >Projetos</Link>
            </li>
            <li className={path[0]?.sobreMim}>
              <Link to={'/sobre-mim'} name="/sobre-mim" onClick={setRouteActive} >Sobre mim</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;