import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element></Route>
    </Routes>
  );
}

export default App;
