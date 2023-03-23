const SearchBox = ({ onChangeHandler }) => {
  return (
    <div>
      <input
        className="search-box monsters-search-box"
        type="search"
        placeholder="Search monsters"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
