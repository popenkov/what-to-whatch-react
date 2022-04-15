import Main from "../main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/123" element={<div>123</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
