import style from './style.module.scss';


function TermosDeUso() {
  return (
    <div>
      <main className={style.main__termos}>
        <h1>Termos de Uso</h1>

        <p>Bem-vindo ao nosso sistema de agendamento, um serviço oferecido pela LKS INFOTEC - CNPJ 37.810.374/0001-82. Ao acessar ou usar nosso serviço, você concorda com estes termos. Leia-os atentamente antes de prosseguir.</p>

        <h2>1. Uso do Serviço</h2>
        <p>O serviço de agendamento é fornecido no modelo SaaS (Software as a Service). Você concorda em usar o serviço conforme os termos estabelecidos neste documento e em conformidade com todas as leis e regulamentos aplicáveis.</p>

        <h2>2. Conta de Administrador</h2>
        <p>Será criado uma conta para gerenciar os recursos do serviço de agendamento. Ao criar uma conta, você concorda em fornecer informações precisas e atualizadas. Você é responsável por manter a segurança de sua conta e senha.</p>

        <h2>3. Privacidade</h2>
        <p>Nós valorizamos e respeitamos sua privacidade. Todas as informações pessoais fornecidas durante o uso do serviço serão tratadas de acordo com nossa Política de Privacidade.</p>

        <h2>4. Taxas e Pagamento</h2>
        <p>O serviço pode estar sujeito a taxas de assinatura ou pagamento por uso. Ao utilizar o serviço, você concorda em pagar todas as taxas aplicáveis de acordo com os termos de pagamento estabelecidos.</p>

        <h2>5. Modificações nos Termos</h2>
        <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, a nosso critério exclusivo. Quaisquer alterações serão efetivas imediatamente após a publicação dos termos revisados. Recomendamos que você revise periodicamente estes termos para estar ciente de quaisquer alterações.</p>

        <h2>6. Encerramento do Serviço</h2>
        <p>Podemos encerrar ou suspender o serviço em caso de inadimplência de pagamento, em caso de violação dos termos descritos.</p>

        <h2>7. Contato</h2>
        <p>
          Se você tiver alguma dúvida ou preocupação sobre estes termos, entre em contato conosco através do e-mail: <a href="mailto:contato@sistemasflex.com.br" target="_blank">contato@sistemasflex.com.br</a>.
        </p>

        <p>
          <strong>Horário de atendimento:</strong> de segunda à sexta dsa 09h00 às 18h00 e sábado até às 14h00.
        </p>

        <p>Última atualização: 01/04/2024</p>
      </main>
    </div>
  );
}

export default TermosDeUso;