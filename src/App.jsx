import { Component } from "react";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";

class App extends Component {
  // the constructor runs before any thing, basicaly in side your constructor you should initialize the state
  // after the constructor to run the render run next, the render will determine what to show
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // lofecycle of a component.
  // componentDidMount() is a method that use have access to, and it runs whenever the component run for the first time.\
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        this.setState(() => {
          return { monsters: data };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
