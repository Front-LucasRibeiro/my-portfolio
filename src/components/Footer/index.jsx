import style from 'components/Footer/footer.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
      <p>&copy; 2024 LKS INFOTEC - CNPJ: 37.810.374/0001-82 - Todos os direitos reservados.</p>

      <ul className={style.contato}>
        <li className={style.contato__email}><a href="mailto:lksribeiro2014@gmail.com" target='_blank'>E-mail</a></li>
        <li className={style.contato__linkedin}><a href="https://www.linkedin.com/in/devlucasribeiro/" target='_blank'>LinkedIn</a></li>
        <li className={style.contato__whatsapp}><a href="https://api.whatsapp.com/send?phone=5511964914546" target='_blank'>WhatsApp</a></li>
        <li className={style.contato__github}><a href="https://github.com/Front-LucasRibeiro" target='_blank'>GitHub</a></li>
      </ul>
    </footer>
  );
}

export default Footer;