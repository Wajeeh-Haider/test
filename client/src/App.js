import { Route, Routes } from "react-router-dom";
import Stories from "./pages/Stories";
import SingleStory from "./pages/SingleStory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Stories />} />
        <Route exact path="/story/:id" element={<SingleStory />} />
      </Routes>
    </div>
  );
}

export default App;
