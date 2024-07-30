import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="Navigation">
        <Link to="/CurrencyConverter">Currency Convertor </Link>
        <Link to="/Opt">opt </Link>
        <Link to="/pagination">Pagination </Link>
      </div>
    </div>
  );
}

export default Home;
