import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Cuisines from "./Cuisines";
import Restaurants from "./Restaurants";
import styled from "styled-components";

const HomeContainer = styled.div``;

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e0e0e0;
  margin: 0 32px;
  height: 60px;
  border-radius: 30px;
`;

const StyledIcon = styled.span`
  color: black;
  width: 60px;
  text-align: center;
  font-size: 24px;
`;

const StyledInput = styled.input`
  flex: 1 1 auto;
  background: transparent;
  border: 0;
  outline-width: 0;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 0;
  text-align: center;
  width: 60px;
  font-size: 24px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
`;

const Recepes = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

function Home() {
  const APP_ID = "95417efe";
  const APP_KEY = "76d23d547a05c048fabba9c17398f344";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("indian");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.table(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <HomeContainer>
      <Filters />

      <SearchWrapper onSubmit={getSearch}>
        <StyledIcon className="uil uil-search" />
        <StyledInput
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Restaurants, cuisines, dishes"
        />
        <StyledButton type="submit" className="uil uil-sliders-v-alt" />
      </SearchWrapper>
      <Cuisines />
      <Recepes>
        {recipes.map((recipe) => (
          <Restaurants
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </Recepes>
    </HomeContainer>
  );
}

export default Home;
