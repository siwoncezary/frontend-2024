import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import FormPage from "./pages/FormPage";
function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/form" element={<FormPage/>}></Route>
        <Route path="/list" element={<h1>List</h1>}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
      </Routes>
    </RootLayout>
  );
}

export default App;
