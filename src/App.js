import React from "react";
import Weather from "./components/weather";

import "./styles/style.css";

// baa74a0eb01a0da6f660540a080e6a41
// e89d7579e6f61bf32b76413cac8a633a
//e1fc50451c575aa36de0aa41a048c1f6
// bf6d1378b295aa0a8dd29e3a6380755d

function App() {
  const [selectedCity, setSelectedCity] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {}, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length > 3) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=e1fc50451c575aa36de0aa41a048c1f6&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.base === "stations") {
            setSelectedCity([data]);
            console.log(data);
          }
        });
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="main-container">
      <div className="weather--app--container">
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        <div>
          {selectedCity.length > 0 &&
            selectedCity.map((city) => <Weather key={city.id} {...city} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
