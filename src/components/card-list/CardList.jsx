import { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  // components are rendered based on two thing when setStete are called and when props are updated
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monsters={monster} />
        ))}
      </div>
    );
  }
}
export default CardList;
