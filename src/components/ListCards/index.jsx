import Card from "components/Card";
import style from "components/ListCards/listCard.module.scss";


const getList = () => {
  let list = [
    {
      image: "/assets/barbershop.jpg",
      description: "Sistema de barbearia para controle de agendamentos de clientes",
      link: "",
      github: "https://github.com/Front-LucasRibeiro/barber-shop",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 59,90",
      page: "/sistema-barber-shop"
    },
    {
      image: "/assets/site-presentes-casamento.jpg",
      description: "Loja virtual para o site Presentes de casamento",
      link: "http://presentescasamento.com.br/",
      github: "https://github.com/Front-LucasRibeiro/presentes-casamento",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 35,00"
    },
    {
      image: "/assets/fabrica-atacado.jpg",
      description: "Loja virtual para a Loja Fabrica no Atacado",
      link: "http://fabricanoatacado.com.br/",
      github: "https://github.com/Front-LucasRibeiro/fabrica-no-atacado",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 35,00"
    },
    {
      image: "/assets/camisetasmix.jpg",
      description: "Loja virtual para a loja de Camisetas Mix",
      link: "http://camisetasmix.com.br/",
      github: "https://github.com/Front-LucasRibeiro/camisetas-mix",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 35,00"
    },
    {
      image: "/assets/shoptecnologia.jpg",
      description: "Loja virtual para a loja Shop Tecnologia",
      link: "https://shoptecnologia.com.br/",
      github: "https://github.com/Front-LucasRibeiro/shoptecnologia",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 35,00"
    }
  ]

  return list;
}

const ListCards = () => {
  return (
    <ul className={style.listCard}>
      {getList().map((projeto, index) => {
        return (
          <Card
            projeto={projeto}
            key={index}
          />
        )
      })}
    </ul>
  )
}

export default ListCards;