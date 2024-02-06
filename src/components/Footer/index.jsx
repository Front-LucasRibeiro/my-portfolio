import style from 'components/Footer/footer.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
      <p>&copy; 2023 LKS INFOTEC - CNPJ: 37.810.374/0001-82 - Todos os direitos reservados.</p>

      <ul className={style.contato}>
        <li><a href="">LinkedIn</a></li>
        <li><a href="">WhatsApp</a></li>
        <li><a href="">GitHub</a></li>
      </ul>
    </footer>
  );
}

export default Footer;