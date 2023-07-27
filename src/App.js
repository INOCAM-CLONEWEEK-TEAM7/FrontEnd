import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SearchPage from "./pages/SearchPage";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import SearchResultPage from "./pages/SearchResultPage";
import DetailPage from "./pages/DetailPage";
import ForgotPage from "./pages/ForgotPage";
import LoadingPage from "./pages/LoadingPage";
import GlobalStyle from "./globalStyle/GlobalStyle";
import { useSelector } from "react-redux";
import TagPage from "./pages/TagPage";

function App() {
  const nightMode = useSelector((state)=>state.nightMode)
  return (
    <>
      <GlobalStyle $nightMode={nightMode}/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path="tag/:category" element={<TagPage />} />
          <Route path="search/posts" element={<SearchResultPage />} />
          <Route path="/detail/:newsId" element={<DetailPage />} />
          <Route path="/loading" element={<LoadingPage />} />

        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Routes>
    </>

  );
}

export default App;
