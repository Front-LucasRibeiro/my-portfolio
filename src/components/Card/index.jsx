import style from 'components/Card/card.module.scss';
import { Link, useResolvedPath } from "react-router-dom";

const Card = ({ projeto }) => {
  const tamanho = projeto.tags.length

  return (
    <li className={style.card}>

      <Link to={projeto.page} className={style.card__linkPage}>
        <img className={style.card__image} src={projeto.image} alt="" />
        <div className={style.card__body}>
          <p className={style.card__description}>{projeto.description}</p>
          <p className={style.card__tags}>
            <strong>Tags: </strong>
            {
              projeto.tags.map((item, index) => {
                if (index === (tamanho - 1)) {
                  return (
                    <span>{`${item}`}</span>
                  )
                } else {
                  return (
                    <><span>{`${item}`}</span>,</>
                  )
                }
              })
            }
          </p>

          <p className={style.card__price}>
            Por <strong>{projeto.price}</strong> <br />
            sem fidelidade
          </p>

          <a href="" className={style.card__linkSaibaMais}>Saiba mais</a>
        </div>
      </Link>

      <a href={projeto.link} target='_blank' className={style.card__link}>Ver Projeto</a>
    </li>
  )
}

export default Card;