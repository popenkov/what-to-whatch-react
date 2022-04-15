import Main from "../../pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddReview from "../../pages/AddReview/AddReview";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/123" element={<div>123</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
