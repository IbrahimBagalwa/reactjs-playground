import Card from "./Card";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} {...monster} />
      ))}
    </div>
  );
};

export default CardList;
