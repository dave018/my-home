import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import Scheduler from "./routes/Scheduler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/scheduler" element={<Scheduler />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
