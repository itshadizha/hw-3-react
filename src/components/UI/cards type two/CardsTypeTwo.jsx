import "./CardsTypeTwo.css"

const CardsTypeTwo = ({ items }) => {
  return (
    <div className="cardsTypeTwo" >
      {items.map((item) => (
        <div className="cardss" key={item.title}>
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsTypeTwo;
