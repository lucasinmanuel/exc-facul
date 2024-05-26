import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListarTarefa />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
