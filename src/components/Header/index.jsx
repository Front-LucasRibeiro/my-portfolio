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
    if (e.target.name === '/contato') setPath([{ "contato": "ativo" }])
  }

  useEffect( () => {
    if (urlPath === '/') setPath([{ "projetos": "ativo" }])
    if (urlPath === '/contato') setPath([{ "contato": "ativo" }])
  }, [])

  return (
    <header className={s.header}>
      <h1 className={s.header__title}><Link to={'/'} name="/projetos" onClick={setRouteActive}>Sistemas Flex</Link></h1>
      <span className={s.menu} onClick={openMenu}>Menu</span>

      <div data-tipo={changeMenu}>
        <nav className={s.header__navigation}>
          <ul>
            <li className={path[0]?.projetos}>
              <Link to={'/'} name="/projetos" onClick={setRouteActive} >Serviços</Link>
            </li>
            <li className={path[0]?.contato}>
              <Link to={'/contato'} name="/contato" onClick={setRouteActive} >Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;