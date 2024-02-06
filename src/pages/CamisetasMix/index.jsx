import style from 'pages/CamisetasMix/style.module.scss';


function CamisetasMix() {
  return (
    <div>
      <main className={style.main}>
        <h1>Loja Online Camisetas Mix</h1>

        <section className={style.descricao}>
          <p>Loja Online simples de realizar o cadastro de produtos e gerenciar os pedidos, com meios de pagamento PagSeguro, Pix e transferência bancária já integrados.</p>

          <p>Veja o vídeo abaixo com a demostração do funcionamento do sistema:</p>
        </section>


        <iframe width="560" height="315" src="https://www.youtube.com/embed/Cw4lD3IhYbg?si=h4386z9UHBvM5IDZ" title="YouTube video player" frameborder="0" allowfullscreen="allowfullscreen"></iframe>


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

              <a href="">Contratar</a>
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

              <a href="">Contratar</a>
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

              <a href="">Contratar</a>
            </li>

          </ul>

          <p className={style.planos__info}>Após o pagamento em até 24 horas entraremos em contato para registrar o seu domínio e liberar o acesso ao sistema, se preferir entre em contato atráves do whatsapp <a href="https://api.whatsapp.com/send?phone=5511964914546" data-type="link" data-id="https://api.whatsapp.com/send?phone=5511964914546" target="_blank" rel="noreferrer noopener">(11) 96491-4546</a> ou pelo email <a href="mailto:contato@sistemasmix.com.br" target="_blank" rel="noreferrer noopener">contato@sistemasmix.com.br</a> que estaremos esclareçendo possíveis dúvidas.</p>
        </section>
      </main>
    </div>
  );
}

export default CamisetasMix;