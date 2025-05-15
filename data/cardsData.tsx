export interface CardItem {
  id: string;
  title: string;
  description: string;
  image: any;
}

const cardsData: CardItem[] = [
  {
    id: "1",
    title: "Tarjeta 1",
    description: "Descripción de la tarjeta 1.",
    image: require("../assets/images/tarjeta1.jpg"),
  },
  {
    id: "2",
    title: "Tarjeta 2",
    description: "Descripción de la tarjeta 2.",
    image: require("../assets/images/tarjeta2.jpg"),
  },
];

export default cardsData;
