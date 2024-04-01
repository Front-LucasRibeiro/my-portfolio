import InfoContratar from 'components/InfoContratar';
import style from 'pages/BarberShop/barbershop.module.scss';
import { Link } from 'react-router-dom';


function BarberShop() {
  return (
    <div>
      <main className={style.main}>
        <h1>Sistema Agendar Aqui</h1>

        <section className={style.descricao}>
          <p>O sistema de cadastro de agendamentos, oferece ao lojista fazer o cadastro do agendamento de seu cliente ou o próprio cliente realizar o seu agendamento, cada cliente terá uma conta para poder conferir os seus agendamentos e o lojista terá uma conta para conferir todos agendamentos em cada dia de trabalho.</p>

          <p>
            O lojista poderá definir o seu horario de trabalho e dias de funcionamento, e também os dias em que ficará ausente.
          </p>

          <p>O lojista poderá definir dias e horários de trabalho para cada funcionário e os serviços prestados pelo funcionário, assim como toda a edição de dados dos funcionários no sistema.</p>

          <p>No login de administrador do sistema é possível alterar todos os dados do sistema e cores do tema, cabeçalho e rodapé, sistema totalmente administrável.</p>

          <p>Veja o vídeo abaixo com a demostração do funcionamento do sistema:</p>
        </section>


        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Cw4lD3IhYbg?si=h4386z9UHBvM5IDZ" title="YouTube video player" frameborder="0" allowfullscreen="allowfullscreen"></iframe> */}


        <section className={style.planos}>
          <h2>Planos</h2>

          <ul>
            <li>
              <div className={style.planos__etiqueta}>
                Mensal
              </div>

              <div className={style.planos__preco}>
                <span></span>R$ 59,90
              </div>

              <p>Acesso ao sistema sem fidelização</p>


              {/* <!-- INICIO FORMULARIO BOTAO PAGBANK: NAO EDITE OS COMANDOS DAS LINHAS ABAIXO --> */}
              <form action="https://pagseguro.uol.com.br/pre-approvals/request.html" method="post">
                <input type="hidden" name="code" value="EE5E78B56060F20444524F970394C431" />
                <input type="hidden" name="iot" value="button" />
                <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/209x48-assinar-assina.gif" name="submit" alt="Pague com PagBank - É rápido, grátis e seguro!" width="209" height="48" />
              </form>
              {/* <!-- FINAL FORMULARIO BOTAO PAGBANK --> */}

              <p>Assinar via Pix:</p>

              <a href="https://nubank.com.br/cobranca/KMG3TTCm7Tbmyfs" target='_blank'>PIX</a>

              <p>Chave CPF/CNPJ: 37810374000182</p>
            </li>
            <li>
              <div className={style.planos__etiqueta}>
                Semestral
              </div>

              <div className={style.planos__preco}>
                R$ 341,40 <br />
                <span>
                  ou 6 vezes de  R$ 56,90
                </span>
              </div>

              <p>Acesso ao sistema por 6 meses com 5% de desconto</p>

              {/* <!-- INICIO FORMULARIO BOTAO PAGBANK: NAO EDITE OS COMANDOS DAS LINHAS ABAIXO --> */}
              <form action="https://pagseguro.uol.com.br/pre-approvals/request.html" method="post">
                <input type="hidden" name="code" value="6B09F4498B8B70ACC4631F878601CF71" />
                <input type="hidden" name="iot" value="button" />
                <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/209x48-assinar-assina.gif" name="submit" alt="Pague com PagBank - É rápido, grátis e seguro!" width="209" height="48" />
              </form>
              {/* <!-- FINAL FORMULARIO BOTAO PAGBANK --> */}

              <p>Assinar via Pix:</p>

              <a href="https://nubank.com.br/cobranca/Em1nyftK6obmyfs" target='_blank'>PIX</a>

              <p>Chave CPF/CNPJ: 37810374000182</p>
            </li>
            <li>
              <div className={style.planos__etiqueta}>
                Anual
              </div>

              <div className={style.planos__preco}>
                R$ 646,80 <br />
                <span>ou 12 vezes de R$ 53,90</span>
              </div>

              <p>Acesso ao sistema por 1 ano com 10% de desconto</p>

              {/* <!-- INICIO FORMULARIO BOTAO PAGBANK: NAO EDITE OS COMANDOS DAS LINHAS ABAIXO --> */}
              <form action="https://pagseguro.uol.com.br/pre-approvals/request.html" method="post">
                <input type="hidden" name="code" value="06C0CC345D5DBF6004CE6FA55EFF6B40" />
                <input type="hidden" name="iot" value="button" />
                <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/209x48-assinar-assina.gif" name="submit" alt="Pague com PagBank - É rápido, grátis e seguro!" width="209" height="48" />
              </form>
              {/* <!-- FINAL FORMULARIO BOTAO PAGBANK --> */}

              <p>Assinar via Pix:</p>

              <a href="https://nubank.com.br/cobranca/f8OPxq317Bbmyfs" target='_blank'>PIX</a>

              <p>Chave CPF/CNPJ: 37810374000182</p>
            </li>

          </ul>

          <InfoContratar formulario="https://docs.google.com/forms/d/e/1FAIpQLSdQ8E8sjsw5rlqAtEx1HUCJKb2NFEnWpifj2sNedk7hha4NaQ/viewform?usp=sf_link" />
        </section>
      </main>
    </div>
  );
}

export default BarberShop;