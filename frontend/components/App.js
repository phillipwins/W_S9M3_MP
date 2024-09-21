import React, { useState, useEffect } from "react";
import data from '../data/data.json';
import axios from "axios";
import { useDarkMode } from '../hooks/useDarkMode';
import Charts from "./Charts";
import Navbar from "./Navbar";

const App = () => {
  // Use the custom useDarkMode hook, which persists state via useLocalStorage
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data);
      })
      .catch(() => {
        console.log('Request failed, using fallback data');
        setCoinData(data);
      });
  }, []);

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      {/* Pass darkMode and setDarkMode to Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
