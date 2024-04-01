import InfoContratar from 'components/InfoContratar';
import style from 'pages/FabricaAtacado/style.module.scss';


function FabricaAtacado() {
  return (
    <div>
      <main className={style.main}>
        <h1>Loja Online Fabrica no Atacado</h1>

        <section className={style.descricao}>
          <p>Loja Online simples de realizar o cadastro de produtos e gerenciar os pedidos, com meios de pagamento PagSeguro, Pix e transferência bancária já integrados.</p>

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
                <span></span>R$ 35,00
              </div>

              <p>Acesso ao sistema sem fidelização</p>

              {/* <!-- INICIO FORMULARIO BOTAO PAGBANK: NAO EDITE OS COMANDOS DAS LINHAS ABAIXO --> */}
              <form action="https://pagseguro.uol.com.br/pre-approvals/request.html" method="post">
                <input type="hidden" name="code" value="A934F0F44747FE4444EBBFA1EA65C29E" />
                <input type="hidden" name="iot" value="button" />
                <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/209x48-assinar-assina.gif" name="submit" alt="Pague com PagBank - É rápido, grátis e seguro!" width="209" height="48" />
              </form>
              {/* <!-- FINAL FORMULARIO BOTAO PAGBANK --> */}

              <p>Assinar via Pix:</p>

              <a href="https://nubank.com.br/cobranca/JczgQ8sTgxbmyfs" target='_blank'>PIX</a>

              <p>Chave CPF/CNPJ: 37810374000182</p>
            </li>
            <li>
              <div className={style.planos__etiqueta}>
                Semestral
              </div>

              <div className={style.planos__preco}>
                R$ 199,50 <br />
                <span>
                  ou 6 vezes de  R$ 33,25
                </span>
              </div>

              <p>Acesso ao sistema por 6 meses com 5% de desconto</p>

              {/* <!-- INICIO FORMULARIO BOTAO PAGBANK: NAO EDITE OS COMANDOS DAS LINHAS ABAIXO --> */}
              <form action="https://pagseguro.uol.com.br/pre-approvals/request.html" method="post">
                <input type="hidden" name="code" value="3C30AD937C7C5BEEE46F9F9C3ACEC395" />
                <input type="hidden" name="iot" value="button" />
                <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/209x48-assinar-assina.gif" name="submit" alt="Pague com PagBank - É rápido, grátis e seguro!" width="209" height="48" />
              </form>
              {/* <!-- FINAL FORMULARIO BOTAO PAGBANK --> */}

              <p>Assinar via Pix:</p>

              <a href="https://nubank.com.br/cobranca/8Y4Bx7LXMibmyfs" target='_blank'>PIX</a>

              <p>Chave CPF/CNPJ: 37810374000182</p>
            </li>
            <li>
              <div className={style.planos__etiqueta}>
                Anual
              </div>

              <div className={style.planos__preco}>
                R$ 378,00 <br />
                <span>ou 12 vezes de R$ 31,50</span>
              </div>

              <p>Acesso ao sistema por 1 ano com 10% de desconto</p>

              {/* <!-- INICIO FORMULARIO BOTAO PAGBANK: NAO EDITE OS COMANDOS DAS LINHAS ABAIXO --> */}
              <form action="https://pagseguro.uol.com.br/pre-approvals/request.html" method="post">
                <input type="hidden" name="code" value="69B4532501014B7114C37F81A4FB506E" />
                <input type="hidden" name="iot" value="button" />
                <input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/assinaturas/209x48-assinar-assina.gif" name="submit" alt="Pague com PagBank - É rápido, grátis e seguro!" width="209" height="48" />
              </form>
              {/* <!-- FINAL FORMULARIO BOTAO PAGBANK --> */}

              <p>Assinar via Pix:</p>

              <a href="https://nubank.com.br/cobranca/ITUeU8a5KSbmyfs" target='_blank'>PIX</a>

              <p>Chave CPF/CNPJ: 37810374000182</p>
            </li>
          </ul>

          <InfoContratar />
        </section>
      </main>
    </div>
  );
}

export default FabricaAtacado;