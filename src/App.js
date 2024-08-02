import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, PokemonDetail, MyPokemonsPage } from "./pages";
import Navbar from "./components/organisms/Navbar";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-pokemons" element={<MyPokemonsPage />} />
          <Route path="/detail" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
