import { Link } from "react-router-dom";
import style from './style.module.scss';


function InfoContratar() {

  return (
    <>
      <p className={style.planos__info}>Após realizar o pagamento, preencha os dados iniciais para a contratação do serviço <a href="">nesse formulário</a>.</p>

      <p className={style.planos__info}>Em até 3 dias, entraremos em contato para registrar o seu domínio e liberar o acesso ao sistema, se preferir entre em contato atráves do whatsapp <a href="https://api.whatsapp.com/send?phone=5511964914546" data-type="link" data-id="https://api.whatsapp.com/send?phone=5511964914546" target="_blank" rel="noreferrer noopener">(11) 96491-4546</a> ou pelo email <a href="mailto:contato@sistemasflex.com.br" target="_blank" rel="noreferrer noopener">contato@sistemasflex.com.br</a> que estaremos esclareçendo possíveis dúvidas.</p>

      <p>
        <Link to={'/termos-de-uso'}>Termos de uso</Link> para a contratação do serviço.
      </p>
    </>
  );
}

export default InfoContratar;