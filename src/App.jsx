import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import AgencyListPage from "./pages/AgencyPortfolio";
import Header from "./layout/Header";
import AgencyDetailPage from "./pages/AgencyPortfolioDetail";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route
          path="/agencyportfolio"
          element={<AgencyListPage></AgencyListPage>}
        ></Route>
        <Route
          path="/agencyportfolio/:index"
          element={<AgencyDetailPage></AgencyDetailPage>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
