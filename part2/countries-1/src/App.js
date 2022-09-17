import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleQuery = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const countriesToShow = countries.filter((name) =>
    name.name.common.toLowerCase().includes(query.toLowerCase())
  );

  console.log(countriesToShow.length);
  return (
    <div>
      <form>
        <div>
          find countries{" "}
          <input
            id="filter"
            name="filter"
            value={query}
            onChange={handleQuery}
          />
        </div>
      </form>
      <Country countries={countriesToShow} />
    </div>
  );
}
export default App;
