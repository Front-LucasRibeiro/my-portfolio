import Card from "components/Card";
import style from "components/ListCards/listCard.module.scss";


const getList = () => {
  let list = [
    {
      image: "/assets/barbershop2.jpg",
      description: "Sistema de agendamentos de serviços",
      link: "https://agendaraqui.com.br/",
      github: "https://github.com/Front-LucasRibeiro/barber-shop",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 59,90",
      page: "/sistema-agendar-aqui"
    },
    {
      image: "/assets/site-presentes-casamento.jpg",
      description: "Loja virtual para o site Presentes de casamento",
      link: "http://presentescasamento.com.br/",
      github: "https://github.com/Front-LucasRibeiro/presentes-casamento",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 35,00",
      page: "/presentes-casamento"
    },
    // {
    //   image: "/assets/fabrica-atacado.jpg",
    //   description: "Loja virtual para a Loja Fabrica no Atacado",
    //   link: "http://fabricanoatacado.com.br/",
    //   github: "https://github.com/Front-LucasRibeiro/fabrica-no-atacado",
    //   tags: ["WooCommerce","WordPress"],
    //   price: "R$ 35,00",
    //   page: "/fabrica-atacado"
    // },
    {
      image: "/assets/camisetasmix.jpg",
      description: "Loja virtual para a loja de Camisetas Mix",
      link: "http://camisetasmix.com.br/",
      github: "https://github.com/Front-LucasRibeiro/camisetas-mix",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 35,00",
      page: "/camisetas-mix"
    },
    {
      image: "/assets/shoptecnologia.jpg",
      description: "Loja virtual para a loja Shop Tecnologia",
      link: "https://shoptecnologia.com.br/",
      github: "https://github.com/Front-LucasRibeiro/shoptecnologia",
      tags: ["WooCommerce","WordPress"],
      price: "R$ 35,00",
      page: "/shop-tecnologia"
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
            index={index}
          />
        )
      })}
    </ul>
  )
}

export default ListCards;