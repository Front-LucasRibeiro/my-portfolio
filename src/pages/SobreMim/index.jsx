import s from 'pages/SobreMim/styles.module.scss';

function Sobre() {
  return (
    <section>
      <div className={s.topo}>
        <div className={s.topo__foto}>
          <img src="./assets/lucas-maranho.jpeg" alt="Lucas Lima Ribeiro Maranho" />
        </div>
        <div className={s.topo__sobre}>
          <h1>Desenvolvedor</h1>

          <h2>Lucas Maranho</h2>

          <p>
            Desenvolvedor web especializado na criação de sistemas, lojas virtuais e blogs dinâmicos. Domínio em HTML, CSS, JavaScript e PHP, com experiência em frameworks como WordPress e plataformas Tray, TrayCorp FBits, NuvemShop, Jet, VTEX, LINX, WooCommerce. Comprometido com a excelência e atualizado com as últimas tendências tecnológicas.
          </p>

          {/* <p>Desenvolvedor Front-end com experiência em React.js, JavaScript, JQuery. Experiência em e-commerce nas plataformas Tray, TrayCorp FBits, NuvemShop, Jet, VTEX, LINX, Wordpress, WooCommerce. Formado em Análise e Desenvolvimento de Sistemas e Sistemas para Internet.</p> */}

          <h2>Contato</h2>

          <ul className={s.contato}>
            <li className={s.contato__email}>
              <a href="mailto:lksribeiro2014@gmail.com" target='_blank'>lksribeiro2014@gmail.com</a>
            </li>
            <li className={s.contato__linkedin}><a href="https://www.linkedin.com/in/devlucasribeiro/" target='_blank'>LinkedIn</a></li>
            <li className={s.contato__whatsapp}><a href="https://api.whatsapp.com/send?phone=5511964914546" target='_blank'>WhatsApp</a></li>
            <li className={s.contato__github}><a href="https://github.com/Front-LucasRibeiro" target='_blank'>GitHub</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sobre;