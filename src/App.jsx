import { useState, useEffect } from "react";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  // useState Hook gives us the ability to encuptilate local state in the function components.

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function fetchingUsers() {
      const res = await fetch(url);
      const data = await res.json();
      if (!ignore) {
        setMonsters(data);
      }
    }

    fetchingUsers();

    return () => {
      ignore = true;
    };
  }, [url]);

  const onSearchChange = (e) => {
    let searchField = e.target.value.toLowerCase();
    setSearchField(searchField);
  };
  const filterMonsters = monsters.filter((monsters) =>
    monsters.name.toLowerCase().includes(searchField)
  );

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

export default App;
