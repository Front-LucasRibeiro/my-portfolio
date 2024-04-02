import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { useState } from 'react';
import { planos } from './planos';


function Planos() {
  const [email, setEmail] = useState("")
  const [listaFiltered, setListaFiltered] = useState([])
  const [showInfo, setShowInfo] = useState(false)
  const [showFilter, setShowFilter] = useState(false)

  const buscarPlano = (e) => {
    e.preventDefault();
    
    const resultado = planos.filter(plano => plano.email === email);

    if(email === "lksribeiro2014@gmail.com"){
      setListaFiltered(planos)
      setShowFilter(true)
    }
    else if(resultado.length > 0){
      setListaFiltered(resultado)
      setShowFilter(false)
    }else{
      setListaFiltered([])
      setShowFilter(false)

      if(email != ""){
        setShowInfo(true)
      }else{
        setShowInfo(false)
      }
    }
  }

  const filter = (e, tipo) => {
    e.preventDefault();

    const resultado = planos.filter(plano => plano.tipo === tipo && (plano.status === "ativo" || plano.status === "pendente"));
    setListaFiltered(resultado)
  }


  return (
    <div>
      <main className={style.mainPlanos}>
        <h1>Consulte aqui o status do seu plano:</h1>
        <form action="">
          <div className={style.mainPlanos__field}>
            <label htmlFor="">Digite seu e-mail para consultar o status do seu plano:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <button className={style.mainPlanos__btn} onClick={buscarPlano}>Buscar</button>
        </form>

        {
          showFilter &&
          <div className={style.mainPlanos__filters}>
            <button className={style.mainPlanos__btn} onClick={(e) => filter(e,"Mensal")}>Filtrar por Mês</button>
            <button className={style.mainPlanos__btn} onClick={(e) => filter(e,"Semestral")}>Filtrar por Semestre</button>
            <button className={style.mainPlanos__btn} onClick={(e) => filter(e,"Anual")}>Filtrar por Ano</button>
          </div>
        }

        <div className={style.mainPlanos__lista}>
          <ul>
            {
              listaFiltered.map(plano => {
                return (
                  <li>
                    <p>
                      <strong>Cliente:</strong> {plano.cliente}
                    </p>
                    <p>
                      <strong>E-mail:</strong> {plano.email}
                    </p>
                    <p>
                      <strong>Site:</strong> <a href={plano.site} target='_blank'>{plano.site}</a>
                    </p>
                    <p>
                      <strong>Plano:</strong> {plano.plano} - {plano.tipo}
                    </p>
                    <p className={`${style.mainPlanos__status} ${plano.status}`}>
                      <strong>Status:</strong> {plano.status}
                    </p>
                    <p>
                      <strong>Valor:</strong> {plano.valor}
                    </p>
                    <p>
                      <strong>Recorrência:</strong> {plano.recorrencia}
                    </p>

                    <Link to={plano.linkRenovar} className={style.mainPlanos__btn}>Renovar plano</Link>
                  </li>
                )
              })
            }
            {
              listaFiltered.length === 0 && showInfo &&
              <p>Não existem planos disponíveis para o e-mail informado.</p>
            }
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Planos;