import s from 'pages/SobreMim/styles.module.scss';

function Sobre() {
  return (
    <section>
      <div className={s.topo}>
        <div className={s.topo__foto}>
          <img src="./assets/lucas-maranho.jpeg" alt="Lucas Lima Ribeiro Maranho" />
        </div>
        <div className={s.topo__sobre}>
          <h1>Sobre mim</h1>

          <h2>Lucas Maranho</h2>

          <p>Desenvolvedor Front-end com experiência em React.js, JavaScript, JQuery. Experiência em e-commerce nas plataformas Tray, TrayCorp FBits, NuvemShop, Jet, VTEX, LINX, Wordpress. Formado em Análise e Desenvolvimento de Sistemas e Sistemas para Internet.</p>

          <h2>Contato</h2>

          <ul>
            <li>
              <strong>E-mail:</strong>
              <a href="mailto:lksribeiro2014@gmail.com" target="_blank">lksribeiro2014@gmail.com</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/devlucasribeiro/" target="_blank">https://www.linkedin.com/in/devlucasribeiro/</a>
            </li>
            <li>
              <strong>WhatsApp:</strong>
              <a href="https://api.whatsapp.com/send?phone=5511964914546" target="_blank">(11) 96491-4546</a>
            </li>
            <li>
              <strong>GitHub:</strong>
              <a href="https://github.com/Front-LucasRibeiro" target="_blank">https://github.com/Front-LucasRibeiro</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sobre;