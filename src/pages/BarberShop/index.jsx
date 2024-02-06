import style from 'pages/BarberShop/barbershop.module.scss';


function BarberShop() {
  return (
    <div>
      <main className={style.main}>
        <h1>Sistema Barber Shop</h1>

        <section className={style.descricao}>
          <p>O sistema de cadastro de agendamentos para clientes de barbearias ou cabeleireiros, oferece ao lojista fazer o cadastro do agendamento de seu cliente ou o próprio cliente realizar o seu agendamento, cada cliente terá uma conta para poder conferir os seus agendamentos e o lojista terá uma conta para conferir todos agendamentos em cada dia de trabalho.</p>

          <p>
            O lojista poderá definir o seu horario de trabalho e dias de funcionamento, e também os dias em que ficará ausente.
          </p>

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
                <span></span>R$ 59,90
              </div>

              <p>Acesso ao sistema sem fidelização</p>

              <a href="">Contratar</a>
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

              <a href="">Contratar</a>
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

              <a href="">Contratar</a>
            </li>

          </ul>

          <p className={style.planos__info}>Após o pagamento em até 24 horas entraremos em contato para registrar o seu domínio e liberar o acesso ao sistema, se preferir entre em contato atráves do whatsapp <a href="https://api.whatsapp.com/send?phone=5511964914546" data-type="link" data-id="https://api.whatsapp.com/send?phone=5511964914546" target="_blank" rel="noreferrer noopener">(11) 96491-4546</a> ou pelo email <a href="mailto:contato@sistemasmix.com.br" target="_blank" rel="noreferrer noopener">contato@sistemasmix.com.br</a> que estaremos esclareçendo possíveis dúvidas.</p>
        </section>
      </main>
    </div>
  );
}

export default BarberShop;