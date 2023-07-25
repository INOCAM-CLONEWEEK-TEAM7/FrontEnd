import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SearchPage from "./pages/SearchPage";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import TagPage from "./pages/TagPage";
import SearchResultPage from "./pages/SearchResultPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<MainPage />} />
        <Route path="tag/:category" element={<TagPage />} />
        <Route path="search/posts" element={<SearchResultPage />} />
        <Route path="/detail/:newsId" element={<DetailPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
