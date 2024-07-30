import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Opt from "./Component/Opt/opt";
import CurrencyConverter from "./Component/currencyExchange/CurrencyConverter";
import Home from "./Component/Home/Home";
import Pagination from "./Component/pagination/pagination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/opt" element={<Opt />}></Route>
        <Route path="/pagination" element={<Pagination />}></Route>
        <Route
          path="/Currency Converter"
          element={<CurrencyConverter />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
