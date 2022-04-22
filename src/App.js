import {
  Routes,
  Route,
} from "react-router-dom";
import CardPage from "./pages/CardPage";
import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items/:id" element={<ItemPage />}/> 
      <Route path="/card" element={<CardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
